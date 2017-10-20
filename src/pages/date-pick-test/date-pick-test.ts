import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatePickTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-pick-test',
  templateUrl: 'date-pick-test.html',
})
export class DatePickTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  myTime
  ionViewDidLoad() {
     this.myTime = "2017-10-20"
  }

  changeEvent(){
      console.log(this.myTime);
  }
}
