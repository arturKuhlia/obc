import { async } from '@angular/core/testing';
import { SnackbarService } from './../../services/snackbar.service';
import { VoteService } from "./../../services/vote.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { map, takeUntil } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"],
})
export class VoteComponent implements OnInit, OnDestroy {
  
  @Input() userId;
  @Input() movieId;
 
  userStar: Observable<any>;
  stars: Observable<any>;
  avgRating: Observable<any>;
  voteCount: number = 0;
  userVote: number ;

  subscription;
  constructor(private starService: VoteService,
    
    private snackBarService: SnackbarService) {}

  ngOnInit() {
    this.stars = this.starService.getMovieStars(this.movieId);
    this.userStar= this.starService.getUserStar(this.userId,this.movieId);
 
    
   
    this.avgRating = this.stars.pipe(
      map((arr) => {
        const ratings = arr.map((v) => v.value);
        return ratings.length
          ? ratings.reduce((total, val) => total + val)  
          : "not reviewed";
      })
    );

    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


  upvote() {
    if(this.userId){
      let vote = this.userVote == 1 ? 0 : 1;
     
      this.starService.setStar(this.userId, this.movieId, vote);
    }else{
      this.snackBarService.showSnackBar('Login to vote');
    };
  }

  downvote() {
   
    if(this.userId){
      let vote =  this.userVote == -1 ? 0 : -1;
    
      this.starService.setStar(this.userId, this.movieId, vote);
    }else{
      this.snackBarService.showSnackBar('Login to vote');
    };
    
  }
}
