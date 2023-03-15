import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { filterPosts } from 'src/app/store/post.actions';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
})
export class PostFilterComponent {
  filterValue: string = '';

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    this.store.dispatch(filterPosts({ filterValue: this.filterValue }));
  }
}
