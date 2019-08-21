import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tou',
  templateUrl: 'tou.html'
})
export class TouPage {

  galleryType = 'regular';

  title = 'Tou Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
