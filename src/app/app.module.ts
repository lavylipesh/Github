import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubNavbarComponent,
    SearchComponent,
    SearchFormComponent,
    NotFoundComponent,
    GithubFormComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
