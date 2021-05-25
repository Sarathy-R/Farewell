import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ImagesComponent } from './images/images.component';
import { SearchComponent } from './search/search.component';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './app.reducer';
import { ResultComponent } from './result/result.component';
import { WishesComponent } from './wishes/wishes.component';
import { MoreComponent } from './more/more.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImagesComponent,
    SearchComponent,
    ResultComponent,
    WishesComponent,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(fromApp.AppReducer),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
