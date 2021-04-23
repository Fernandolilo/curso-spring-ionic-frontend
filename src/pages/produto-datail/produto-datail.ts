import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../app/models/produto.dto';

/**
 * Generated class for the ProdutoDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-datail',
  templateUrl: 'produto-datail.html',
})
export class ProdutoDatailPage {

  item: ProdutoDTO;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.item= {
      id: "1",
      nome: "Mause",
      preco: 80.00
    }
  }
}
