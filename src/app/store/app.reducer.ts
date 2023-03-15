import { IPost } from '../models/post.model';

export interface AppState {
  posts: { ids: Array<number>; entities: Array<IPost>; filterValue: string };
}
