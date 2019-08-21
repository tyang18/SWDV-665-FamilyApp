import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-see',
  templateUrl: 'see.html'
})
export class SeePage {

  galleryType = 'regular';

  title = 'See Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
