import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromApp from './../app.reducer';
import * as appActions from './../store/app.actions';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
   questions = [];
  aboutDetails = {"name":"N","alias":"N"};
  extraDetails={};
  qnsSubs = new Subscription();
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.qnsSubs = this.store.select('appStore').subscribe((state) => {
      this.questions = state.peopleQuestion;
      this.aboutDetails = state.about;
      this.extraDetails= state.extra_details;
    });
  }
  ngOnDestroy() {
    this.qnsSubs.unsubscribe();
  }
}
