import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../app/models/endereco.dto';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items =[
      {
        id: "1",
        logradouro: "Rua 7 de Abril",
        numero: "157",
        complemento: "Apto 200",
        bairro: "Republica",
        cep: "12345000",
        cidade: {
          id: "1",
          nome: "São Paulo",
          estado: {
            id: "1",
            nome: "São Paulo"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Cerqueira Cesar",
        numero: "157",
        complemento: "Apto 200",
        bairro: "Republica",
        cep: "12345000",
        cidade: {
          id: "1",
          nome: "São Paulo",
          estado: {
            id: "1",
            nome: "São Paulo"
          }
        }
      }
    ];
  }
}
