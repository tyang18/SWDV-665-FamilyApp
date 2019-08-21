import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pa',
  templateUrl: 'pa.html'
})
export class PaPage {

  galleryType = 'regular';

  title = 'Pa Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
