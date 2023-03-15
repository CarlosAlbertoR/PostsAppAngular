import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostFilterComponent } from './components/post-filter/post-filter.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { postReducer } from './store/post.reducer';
import { PostEffects } from './store/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostFilterComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostEffects]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
