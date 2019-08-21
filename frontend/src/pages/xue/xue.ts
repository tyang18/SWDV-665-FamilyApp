import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-xue',
  templateUrl: 'xue.html'
})
export class XuePage {

  galleryType = 'regular';

  title= 'Xue Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
