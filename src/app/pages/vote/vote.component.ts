import { VoteService } from './../../services/vote.service';
import { Component, OnInit, Input } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {

 


 


  @Input() userId;
  @Input() movieId;
  userVote: number = 0;
   
  stars: Observable<any>;
  avgRating: Observable<any>;

  constructor(private starService: VoteService) { }

  ngOnInit() {
     
    
    this.stars = this.starService.getMovieStars(this.movieId)
   
    this.avgRating = this.stars.pipe(map(arr => {
      const ratings = arr.map(v => v.value)
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    }))
    
  }

   
  upvote() {
    let vote = this.userVote == 1 ? 0 : 1
    this.starService.setStar(this.userId, this.movieId, vote)
  }

  downvote() {
    let vote = this.userVote == -1 ? 0 : -1
    this.starService.setStar(this.userId, this.movieId, vote)
  }
 
}