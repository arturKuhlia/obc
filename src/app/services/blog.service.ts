import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  createPost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));
    return this.db.collection('blogs').add(postData);
  }

  getAllPosts(): Observable<Post[]> {
    const blogs = this.db.collection<Post>('blogs', ref => ref.orderBy('createdDate', 'asc')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          c => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
      }));
    return blogs;
  }

    getAllblogsForUser(usr: string): Observable<Posts[]> {
    const posts = this.db.collection<Post>('blogs',
      ref => ref.where('author', '==', usr).orderBy('createdDate', 'desc')).snapshotChanges().pipe(
        map(actions => {
          return actions.map(
            c => ({
              postId: c.payload.doc.id,
              ...c.payload.doc.data()
            }));
        }));
    return posts;
  }

  
  getPostbyId(id: string): Observable<Post> {
    const blogDetails = this.db.doc<Post>('blogs/' + id).valueChanges();
    return blogDetails;
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));
    return this.db.doc('blogs/' + postId).update(putData);
  }

  deletePost(postId: string) {
    return this.db.doc('blogs/' + postId).delete();
  }
}
