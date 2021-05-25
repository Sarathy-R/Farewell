import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {
  gifCounts = new Array(3);
  videoCount = new Array(1);
  constructor() {}

  ngOnInit(): void {}
  /**Returns the GIF path */
  gifPath(value) {
    let newvalue = value + 1;
    return './../../assets/gifs/mohan_gifs (' + newvalue + ').gif';
  }
  videoPath(value) {
    let newvalue = value + 1;
    return './../../assets/videos/video (' + newvalue + ').mp4';
  }
}
