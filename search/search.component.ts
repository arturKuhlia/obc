import { SnackbarService } from './../../services/snackbar.service';
import { CommentService } from './../../services/comment.service';
import { AuthService } from './../../services/auth.service';
import { AppUser } from './../../models/appuser';
import { Post } from './../../models/post';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';  
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {

  config: any;
  pageSizeOptions = [];
 
  term: string;
  blogPost: Post[] = [];
  appUser: AppUser;
  private unsubscribe$ = new Subject<void>();

  constructor(private blogService: BlogService,
    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private snackBarService: SnackbarService) {
    this.pageSizeOptions = [5, 10, 15];
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
    this.blogService.getAllPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.blogPost = result;
        
      });
  }


 

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
