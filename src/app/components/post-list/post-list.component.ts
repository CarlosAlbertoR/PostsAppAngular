import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from '../../models/post.model';

import { deletePost, loadPosts } from '../../store/post.actions';
import { selectAllPosts } from '../../store/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts$: Observable<IPost[]> = this.store.select(selectAllPosts);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  deletePost(id: number) {
    if (confirm('¿Estás seguro que deseas eliminar este post?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
