import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { FamilyServiceProvider } from '../family-service/family-service';


@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: FamilyServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  //Prompts to add item or edit item.  
  showPromt(item?, index?) {

    const promt = this.alertCtrl.create({
      
      title: item ? 'Edit item' : 'Add Item',
      
      message: item ? 'Enter item details then click add' : 'Change item details then click save',
      
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'dob',
          placeholder: 'Date of Birth',
          value: item ? item.dob : null
        },
        {
          name: 'image',
          placeholder: 'Profile Image',
          value: '../../assets/imgs/ .png'
        },
        {
          name: 'link',
          placeholder: 'Page Link',
          value: item ? item.link : null
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {
          text: item ? 'Add' : 'Save',
          handler: data => {
            if (index != undefined) {
              item.name = data.name;
              item.dob = data.dob;
              item.image = data.image;
              item.link = data.link;
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]

    });
    promt.present();
  }

}
