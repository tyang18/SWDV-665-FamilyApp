import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vong',
  templateUrl: 'vong.html'
})
export class VongPage {

  galleryType = 'regular';

  title = 'Vong Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
