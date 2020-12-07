import { BlogService } from '../../services/blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router'; 
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
 
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  postData: Post = new Post();
  postId;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) {
    if (this.route.snapshot.params['id']) {
       
      this.postId = this.route.snapshot.paramMap.get('id');

    }
  }

  ngOnInit() {
    console.log(this.postId)
    this.blogService.getPostbyId(this.postId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: Post) => {
          this.postData = result;
           
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
