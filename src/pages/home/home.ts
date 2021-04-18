import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../app/models/credenciais.dto';
import { AuthService } from '../../services/auth.service';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  creds : CredenciaisDTO ={
    email: "",
    senha: ""
    
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(true);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(false);
  }
  
  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      console.log(this.creds);
      this.navCtrl.setRoot('CategoriasPage');
      },
    error => {});    
  }
}


