import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  imagesCount = new Array(39);
  selectedImagePath = '';
  constructor() {}

  ngOnInit(): void {}
  imagePath(value) {
    let newvalue = value + 1;
    return './../../assets/Images/mohan (' + newvalue + ').jpg';
  }

  onImageClick(ind) {
    this.selectedImagePath = this.imagePath(ind);
    console.log('SS', this.selectedImagePath);
  }

  /** On Closing the Image view */
  onClose() {
    console.log('Close');
    this.selectedImagePath = '';
  }
}
