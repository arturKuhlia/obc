import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../models/appuser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Comments } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { Post } from './../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
   appUser: AppUser;
     commentList: Comments[] = [];
        blogPosts: Post[] = [];
       private unsubscribe$ = new Subject<void>();

  constructor(

      private commentService: CommentService,
    public authService: AuthService,
      private blogService: BlogService) { }
 

  ngOnInit() {


   this.authService.appUser$.subscribe(user => {
    this.appUser = user
      if (!user) {
        
        return;
      } else { 
      this.getAllComments();
      this.getBlogPosts();
       
      } });

  }

  getBlogPosts() {
    this.blogService.getAllblogsForUser(this.appUser.name)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.blogPosts = result;
        
      });
  }

   getAllComments() {
   
    this.commentService.getAllCommentsForUser(  this.appUser.name)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {


        this.commentList= result.sort((b, a) =>
           a.commentDate   -
           b.commentDate )
   

      });
      



  }

  ngOnDestroy() {
      this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
