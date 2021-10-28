import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../../models/appuser';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Subject, Observable } from 'rxjs';
import { Bookmark, BookmarkService } from './../../services/bookmark.service';
import { async } from "@angular/core/testing";
import { map, takeUntil } from "rxjs/operators";
import { element } from 'protractor';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {

  allBookmarks

  allDocs = [];
  allComments = [];
  allQuestions = [];

  config: any;
  pageSizeOptions = [];


  blogPost: Post[] = [];
  appUser: AppUser;
  type = 'doc';
  private unsubscribe$ = new Subject<void>();


  one$;

  constructor(private blogService: BlogService,
    private bookmarkSerice: BookmarkService,

    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,

    private snackBarService: SnackbarService) {
    this.pageSizeOptions = [10, 20, 30];
    const pageSize = sessionStorage.getItem('pageSize');
    this.config = {
      currentPage: 1,
      itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
    };
  }
  ngOnInit() {

    this.authService.appUser$.subscribe(appUser => {
      this.appUser = appUser
      this.getBookmarks();

    }


    );

    this.route.params.subscribe(
      params => {
        this.config.currentPage = +params['pagenum'];


      }

    );
  }



  async getBookmarks() {

    this.one$ = this.bookmarkSerice.getBookmarks(this.appUser.email)
      .pipe()
      .subscribe(result => {
      
        let coms = [];
        let qsts = [];


        this.allBookmarks = result
        this.allBookmarks.forEach(el => {
          el.type == "doc" ? this.allDocs.push(el.itemId) : false;
          el.type == "comment" ? coms.push(el.itemId) : false;
          el.type == "post" ? qsts.push(el.itemId) : false;



          qsts.forEach(el => {
            this.blogService.getPostbyId(el).pipe().subscribe(result => {
              let res
              res = result
              res.postId = el;
         
              this.allQuestions.push(res)
            }
            )
          });
          
          coms.forEach(el => {
            this.commentService.getCommentById(el).pipe().subscribe(result =>
              this.allComments.push(result))

          });

        });

      });
  }

  ngOnDestroy() {
    this.one$.unsubscribe();
  }

}
