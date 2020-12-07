import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppUser } from '../../models/appuser';
import { Comments } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [DatePipe]
})
export class CommentsComponent implements OnInit, OnDestroy {

  @Input()
  blogId;
  email;
  commentedBy;
  appUser: AppUser;
  userEmail: any;
  public comments = new Comments();
  commentList: Comments[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private datePipe: DatePipe,
    private commentService: CommentService,
    private authService: AuthService,
    private snackBarService: SnackbarService) {


     }

  ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.authService.appUser$.subscribe(appUser=>{
      if(appUser)
        this.userEmail = appUser.email;
    })
    this.getAllComments();
    console.log(this.userEmail)

  }

  onCommentPost(commentForm) {
    this.comments.commentDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm:ss');
    this.comments.blogId = this.blogId;
    this.comments.email = this.appUser.email;
    this.comments.commentedBy= this.appUser.name;
    this.commentService.saveComment(this.comments).then(
      commentForm.resetForm()
    );
  }

  getAllComments() {
    this.commentService.getAllCommentsForBlog(this.blogId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.commentList = result;
      });
      



  }

  deleteComment(commentId) {
    if (confirm('Do you want to delete this comment!!!')) {
      this.commentService.deleteSingleComment(commentId).then(
        () => {
          this.snackBarService.showSnackBar('Comment Deleted successfully');
        }
      );
    }
  }

  login() {
    this.authService.login();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
