import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PostPage } from '../post/post';
import { ReviewPage } from '../review/review';


/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   goToHome(){
    this.navCtrl.push(HomePage);
   }
  goToPost() {
    this.navCtrl.push(PostPage);
  }
  goToReview() {
    this.navCtrl.push(ReviewPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }

}
