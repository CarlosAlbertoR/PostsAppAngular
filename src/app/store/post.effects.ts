import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';
import { IPost } from '../models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((posts: IPost[]) => PostActions.loadPostsSuccess({ posts })),
          catchError((error: any) =>
            of(PostActions.loadPostsFailure({ error }))
          )
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap(({ post }) =>
        this.postService.addPost(post).pipe(
          map((newPost: IPost) =>
            PostActions.addPostSuccess({ post: newPost })
          ),
          catchError((error: any) => of(PostActions.addPostFailure({ error })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(({ id }) =>
        this.postService.deletePost(id).pipe(
          map(() => PostActions.deletePostSuccess({ id })),
          catchError((error: any) =>
            of(PostActions.deletePostFailure({ error }))
          )
        )
      )
    )
  );

  filterPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.filterPosts),
      mergeMap(({ filterValue }) => {
        return this.postService.filterPostsByName(filterValue).pipe(
          map((posts: IPost[]) => PostActions.loadPostsSuccess({ posts })),
          catchError((error: any) =>
            of(PostActions.loadPostsFailure({ error }))
          )
        );
      })
    )
  );
}
