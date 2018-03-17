import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { MainMenuPage } from '../main-menu/main-menu';
import { Profile } from '../../models/profile';
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  eventData: FirebaseObjectObservable<Profile>;

  arrData = [];
  profile = {} as Profile;


  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    /*this.fdb.list("/event/").take(1).subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });*/

  }

  addItem() {
    this.fdb.list("/feedback/").push(this.profile);
    this.navCtrl.setRoot(MainMenuPage);
    alert("Thank you for your feedback!!!");
  }

  required() {
    var empt = this.profile.courseName;
    if (this.profile.courseName == null || this.profile.courseDiff == null || this.profile.profRate == null) {
      alert("Please fill out required(*) fields");
    return false;
  }
  else {
    this.addItem();
    return true;
  }
}

  
}
