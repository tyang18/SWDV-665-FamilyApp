import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FamilyServiceProvider } from '../../providers/family-service/family-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TouPage } from '../tou/tou';
import { ShouaPage } from '../shoua/shoua';
import { FuePage } from '../fue/fue';
import { XuePage } from '../xue/xue';
import { SeePage } from '../see/see';
import { PaPage } from '../pa/pa';
import { VongPage } from '../vong/vong';
import { SongPage } from '../song/song';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  title= "Family Members";
  //Empty members list.
  items = [];
  errorMessage: string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: FamilyServiceProvider, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {
    
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadItems();
    });
  }
  //load the default list.
  ionViewDidEnter() {
    this.loadItems();
  }

  //opens a new page
  openPage(item){
    if (item == 'Tou'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(TouPage);
    }
    else if (item == 'Shoua'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(ShouaPage);
    }
    else if (item == 'Fue'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(FuePage);
    }
    else if (item == 'Xue'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(XuePage);
    }
    else if (item == 'See'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(SeePage);
    }
    else if (item == 'Pa'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(PaPage);
    }
    else if (item == 'Vong'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(VongPage);
    }
    else if (item == 'Song'){
      console.log("Opening page " + item);
      this.navCtrl.setRoot(SongPage);
    }
    else{
      console.log("No pages called...");
    }
  }
    


  //update or load the new list.
  loadItems(){
    this.dataService.getItems()
      .subscribe(
        items => this.items = items,
        error => this.errorMessage = <any>error
        );
  }

  //removes the item
  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Removing Item number '+ index,
      duration: 3000 }
    );
    toast.present();
    
    this.dataService.removeItem(item);
  }

  //share the item via native device.
  shareItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Sharing Item number '+ index,
      duration: 3000 }
    );
    toast.present();

    let message = "Member Item - Name: " + item.name + " - Quantity: " + item.quantity;
    let subject = "Share via FamilyApps app";
    this.socialSharing.share(message, subject).then(() => {

    }).catch((error) => {
      console.error("Error while Sharing: ", error);
    });

  }

  //Edits and item
  editItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Editing Item number '+ index,
      duration: 2000 }
    );
    toast.present();
    this.inputDialogService.showPromt(item, index)
  }

  //Adds a new item.
  addItem(){
    const toast = this.toastCtrl.create({
      message: 'Adding Item...',
      duration: 2000 }
    );
    toast.present();
   this.inputDialogService.showPromt();
  }
  

}
