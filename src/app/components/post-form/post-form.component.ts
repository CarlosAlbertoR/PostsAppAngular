import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/store/app.reducer';
import { addPost } from 'src/app/store/post.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() addPost: EventEmitter<IPost> = new EventEmitter();

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private store: Store<AppState>
  ) {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const post: IPost = {
        id: new Date().getTime(),
        name: this.postForm.value.name,
        description: this.postForm.value.description,
      };

      this.store.dispatch(addPost({ post }));
      this.postForm.reset();
    }
  }
}
