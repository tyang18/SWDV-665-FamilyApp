import { Component } from '@angular/core';
import { ViewController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'popover-tou',
  templateUrl: 'popovertou.html'
})
export class ModalPage {

  items: any;
  text: String;

  galleryType = 'regular';

  images = [
    1,2,3,4,5
  ];

  constructor(private navParams: NavParams, private view: ViewController ) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }
}
