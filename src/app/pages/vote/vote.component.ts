import { async } from "@angular/core/testing";
import { SnackbarService } from "./../../services/snackbar.service";
import { VoteService } from "./../../services/vote.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { map, takeUntil } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"],
})
export class VoteComponent implements OnInit, OnDestroy {
  @Input() userId;
  @Input() movieId;
  userStars: Observable<any>;
  stars: Observable<any>;
  avgRating: Observable<any>;
  usrVote: Observable<any>;
  voteData = [];
  userVote: number = 0;
  subscription;
  constructor(
    private starService: VoteService,
    private snackBarService: SnackbarService
  ) {}
  ngOnInit() {
    this.stars = this.starService.getMovieStars(this.movieId);
    this.avgRating = this.stars.pipe(
      map((arr) => {
        let result :{up:number,down:number,total:number};
        let total;
        const ratings = arr.map((v) => v.value);
        
        const up = ratings.length
          ? ratings.filter((e) => e > 0).reduce((total, val) => total + val, 0)
          : 0;
        if (!this.userId) {
          total = 0;
        } else {
          const foundArr = arr
            .map((v) => v)
            .find((element) => element.userId == this.userId);
          foundArr ? total = foundArr.value : total = 0;
        }
        const down = ratings.length
          ? ratings.filter((e) => e < 0).reduce((total, val) => total + val, 0)
          : 0;
        if (!this.userId) {
          total = 0;
        } else {
          const foundArr = arr
            .map((v) => v)
            .find((element) => element.userId == this.userId);
          foundArr ? total = foundArr.value : total = 0;
        }
        result={up,down, total} ;
        console.log(result);
        return result;
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  upvote(val) {
     
    if (this.userId) {
      let vote = val == 1 ? 0 : 1;
      console.log("pushed up vote", vote)
      this.starService.setStar(this.userId, this.movieId, vote);
    } else {
      this.snackBarService.showSnackBar("Login to vote");
    }
  }
  downvote(val) {
    
    if (this.userId) {
      let vote = val == -1 ? 0 : -1;
       console.log("pushed up vote", vote)
      this.starService.setStar(this.userId, this.movieId, vote);
    } else {
      this.snackBarService.showSnackBar("Login to vote");
    }
  }
}
