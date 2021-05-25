import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { wishFormat } from './../models/wish.model';
import * as fromApp from './../app.reducer';
import * as appActions from './../store/app.actions';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss'],
})
export class WishesComponent implements OnInit, OnDestroy {
  //Creation of Subscriptions
  wishSusb = new Subscription();

  //Creation of variables
  allWishes: wishFormat[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store
      .select('appStore')
      .pipe(
        map((state) => {
          return state.wishCollections;
        })
      )
      .subscribe((wishes) => {
        this.allWishes = wishes;
      });
  }
  ngOnDestroy() {
    this.wishSusb.unsubscribe();
  }
}
