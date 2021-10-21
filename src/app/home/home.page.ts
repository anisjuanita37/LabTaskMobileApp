import { Component, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('radioGroup') radioGroup: IonRadioGroup
  
  // defaultSelectedRadio = "Sausage";
  // //Get value on ionChange on IonRadioGroup
  // selectedRadioGroup:any;
  // //Get value on ionSelect on IonRadio item
  // selectedRadioItem:any;

  title: string = "Check Box Task";

  radio_list = [
    { id: '1', name: 'radio_list', value: 'Pepperoni', pic: 'assets/nugget.jpg', checked: true, disabled: false },
    { id: '2', name: 'radio_list', value: 'Sausage', pic: 'assets/favicon.png', checked: false, disabled: false },
    { id: '3', name: 'radio_list', value: 'Mushroom', pic: 'assets/nugget.jpg', checked: false, disabled: false },
    { id: '4', name: 'radio_list', value: 'Sausage2', pic: 'assets/favicon.png', checked: false, disabled: false },
    { id: '5', name: 'radio_list', value: 'Mushroom2', pic: 'assets/nugget.jpg', checked: false, disabled: false },
    { id: '6', name: 'radio_list', value: 'Sausage3', pic: 'assets/favicon.png', checked: false, disabled: false },
    { id: '7', name: 'radio_list', value: 'Mushroom3', pic: 'assets/nugget.jpg', checked: false, disabled: false },
  ];


  // radio_list = [
  //   {
  //     id: '1',
  //     name: 'radio_list',
  //     value: 'radio_1',
  //     text: 'One',
  //     disabled: false,
  //     checked: true,
  //     color: 'primary'
  //   }, {
  //     id: '2',
  //     name: 'radio_list',
  //     value: 'radio_2',
  //     text: 'Two',
  //     disabled: false,
  //     checked: false,
  //     color: 'secondary'
  //   }, {
  //     id: '3',
  //     name: 'radio_list',
  //     value: 'radio_3',
  //     text: 'Three',
  //     disabled: false,
  //     checked: false,
  //     color: 'danger'
  //   },
  // ];

  // radioGroupChange(event) {
  //   console.log("radioGroupChange",event.detail);
  //   this.selectedRadioGroup = event.detail;
  // }

  // radioFocus() {
  //   console.log("radioFocus");
  // }
  // radioSelect(event) {
  //   console.log("radioSelect",event.detail);
  //   this.selectedRadioItem = event.detail;
  // }
  // radioBlur() {
  //   console.log("radioBlur");
  // }
  constructor() { }

}
