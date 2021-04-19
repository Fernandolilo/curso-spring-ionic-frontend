import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../app/models/cliente.dto';
import { API_CONFIG } from '../../config/api.config';
import { ClienteService } from '../../services/domain/cliente.service';
import { StorageService } from '../../services/storage.service';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let locauUser = this.storage.getLocalUser();
    if(locauUser && locauUser.email){
      this.clienteService.findByEmail(locauUser.email)
        .subscribe(response => {
          this.cliente = response;
          this.getImageIfExistis();         
        },
        error => {});
    } 
  }
  getImageIfExistis() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
    error => {});
  }
  
}
