import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-shoua',
  templateUrl: 'shoua.html'
})
export class ShouaPage {
  
  galleryType = 'regular';

  title = 'Shoua Yang';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
