import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  searchedText: string = 'mohan';
  allOptions = ['About', 'Images', 'More'];
  selectedOptionNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onOption(value) {
    this.selectedOptionNumber = value;
  }
}
