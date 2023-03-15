import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState, postAdapter } from './post.reducer';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
  selectPostState,
  postAdapter.getSelectors().selectAll
);

export const selectPostById = (id: number) =>
  createSelector(selectAllPosts, (posts) =>
    posts.find((post) => post.id === id)
  );

export const selectFilteredPosts = (name: string) =>
  createSelector(selectAllPosts, (posts) =>
    posts.filter((post) => post.name.toLowerCase().includes(name.toLowerCase()))
  );
