import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../../models/appuser';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Subject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  providers: [DatePipe]
})
export class BlogCardComponent implements OnInit, OnDestroy {



  config: any;
  pageSizeOptions = [];

  blogPost: Post[] = [];
  appUser: AppUser;
  private unsubscribe$ = new Subject<void>();
  one$;
  constructor(private blogService: BlogService,
    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private snackBarService: SnackbarService) {
    this.pageSizeOptions = [10, 20, 30];
    const pageSize = sessionStorage.getItem('pageSize');
    this.config = {
      currentPage: 1,
      itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
    };
  }


  ngOnInit() {

    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);

    this.route.params.subscribe(
      params => {
        this.config.currentPage = +params['pagenum'];
        this.getBlogPosts();

      }

    );



  }


  getBlogPosts() {
    this.one$ = this.blogService.getAllPosts()
      .pipe()
      .subscribe(result => {
        this.blogPost = result.sort((a, b) =>
           a.createdDate   -
           b.createdDate )
      });
  }

  delete(postId: string) {
    if (confirm('Are you sure')) {
      this.blogService.deletePost(postId).then(
        () => {
          this.commentService.deleteAllCommentForBlog(postId);
          this.snackBarService.showSnackBar('Blog post deleted successfully');
        }
      );
    }
  }

  ngOnDestroy() {
    this.one$.unsubscribe();
  }
}
