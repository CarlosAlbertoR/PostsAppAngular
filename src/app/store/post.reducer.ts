import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as PostActions from './post.actions';
import { IPost } from '../models/post.model';

export interface PostState extends EntityState<IPost> {
  filterValue: string;
}

export const postAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>({
  selectId: (post: IPost) => post.id,
});

export const initialState: PostState = postAdapter.getInitialState({
  filterValue: '',
});

export const postReducer = createReducer(
  initialState,

  on(PostActions.loadPostsSuccess, (state, { posts }) =>
    postAdapter.setAll(posts, state)
  ),

  on(PostActions.addPostSuccess, (state, { post }) =>
    postAdapter.addOne(post, state)
  ),

  on(PostActions.deletePostSuccess, (state, { id }) =>
    postAdapter.removeOne(id, state)
  ),

  on(PostActions.filterPosts, (state, { filterValue }) => ({
    ...state,
    filterValue,
  }))
);
