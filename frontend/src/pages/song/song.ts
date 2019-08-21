import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-song',
  templateUrl: 'song.html'
})
export class SongPage {

  galleryType = 'regular';

  title = 'Song Vue';

  images = [
    1,2,3,4,5
  ];

  constructor(public navCtrl: NavController) {

  }

}
