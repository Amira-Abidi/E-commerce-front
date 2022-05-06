import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];
  prodSub: Subscription;

  constructor(private prodService: ProductsService, private carteservice: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        this.products = this.prodService.getProductByPage(0) ;
      }
    );
    this.prodService.emitProducts();
  }

  addCart(product: Products): void{
    this.carteservice.addProductToCard(product);
  }

}
