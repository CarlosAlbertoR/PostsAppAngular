import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/models/post.model';

export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: IPost[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: IPost }>()
);

export const addPostSuccess = createAction(
  '[Post] Add Post Success',
  props<{ post: IPost }>()
);

export const addPostFailure = createAction(
  '[Post] Add Post Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ id: number }>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ id: number }>()
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: any }>()
);

export const filterPosts = createAction(
  '[Post] Filter Posts',
  props<{ filterValue: string }>()
);
