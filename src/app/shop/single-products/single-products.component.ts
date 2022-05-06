import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-products',
  templateUrl: './single-products.component.html',
  styleUrls: ['./single-products.component.css']
})
export class SingleProductsComponent implements OnInit {

  product: Products;
  prefUrlImage = `${environment.prefUrlImage}`;
  productSub: Subscription;

  constructor(private route: ActivatedRoute,
              private prodService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const id = +this.route.snapshot.params["id"];

    this.productSub = this.prodService.prodSubject.subscribe(
      (data: Products[])=>{
        this.product = this.prodService.getProductById(id);
      }
    );
    this.prodService.emitProducts();
  }

  addToCart(product: Products): void{
    this.cartService.addProductToCard(product);
  }

}
