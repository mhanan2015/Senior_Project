import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { MainMenuPage } from '../main-menu/main-menu';
import { EmailValidator } from '../../validators/email';
import { SignupPage } from '../signup/signup';
import { ReviewPage } from '../review/review';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, public authData: AuthProvider, 
  public formBuilder: FormBuilder, public alertCtrl: AlertController,
  public loadingCtrl: LoadingController) {
  
  this.loginForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required, 
    EmailValidator.isValid])],
    password: ['', Validators.compose([Validators.minLength(6), 
    Validators.required])]
});

  }
  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        if (this.loginForm.value.email.slice(-9) == "@ncat.edu") {
          this.navCtrl.setRoot(ReviewPage)
        } else {
          this.navCtrl.setRoot(MainMenuPage);
        } 
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

   goToSignup(params){
    this.navCtrl.push(SignupPage);

  }

}
