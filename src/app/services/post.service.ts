import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: IPost[] = [
    { id: 1, name: 'Post 1', description: 'Description of the post 1' },
    { id: 2, name: 'Post 2', description: 'Description of the post 2' },
    { id: 3, name: 'Post 3', description: 'Description of the post 3' },
    { id: 4, name: 'Post 4', description: 'Description of the post 4' },
    { id: 5, name: 'Post 5', description: 'Description of the post 5' },
  ];

  constructor() {}

  getPosts(): Observable<IPost[]> {
    return of(this.posts).pipe(delay(1000));
  }

  addPost(post: IPost): Observable<IPost> {
    const newPost = { ...post, id: this.posts.length + 1 };
    this.posts.push(newPost);
    return of(newPost).pipe(delay(1000));
  }

  deletePost(id: number): Observable<IPost[]> {
    this.posts = this.posts.filter((post) => post.id !== id);
    return of(this.posts).pipe(delay(1000));
  }

  filterPostsByName(name: string): Observable<IPost[]> {
    const filteredPosts = this.posts.filter((post) => post.name.includes(name));
    return of(filteredPosts);
  }
}
