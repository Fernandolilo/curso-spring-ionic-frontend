import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../app/models/produto.dto';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoService } from '../../services/domain/produto.service';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    let loader = this.prensetLoading();
    this.produtoService.findByCategoria(categoria_id)
      .subscribe(response => {
        this.items = response ['content'];
        loader.dismiss();
        this.loadImageUrls();
      },
      error => {
        loader.dismiss();
      });
  }

  loadImageUrls(){
    for( var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getSmallImageFromBucket(item.id)
        .subscribe( response => {
          item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.id}-small.jpg`;
        },
        error => {})
    }
  }
  ShowDetail(produto_id: string){
    this.navCtrl.push('ProdutoDatailPage', {produto_id: produto_id});
  }

  prensetLoading(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;

  }
}
