import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fue',
  templateUrl: 'fue.html'
})
export class FuePage {

  galleryType = 'regular';

  title = 'Fue Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
