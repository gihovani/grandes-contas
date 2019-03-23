import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideConfig = {
    slidesToShow: 4, slidesToScroll: 2, infinite: true, dots: false, autoplay: true,
    nextArrow: '<span class="nextArrow">›</span>',
    prevArrow: '<span class="prevArrow">‹</span>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  slickers: Array<Product[]> = [];

  constructor(private productHttp: ProductService) {
  }

  ngOnInit() {
    this.productHover(null);
    this.getProducts();
  }

  getProducts() {
    this.productHttp.list().subscribe(products => {
      if (!products) {
        return;
      }
      let x = 0;
      this.slickers.push([]);
      products.forEach(product => {
        this.slickers[x].push(product);

        if (!(this.slickers[x].length % 4)) {
          this.slickers.push([]);
          x++;
        }
      });
    });
  }

  productHover(product: Product) {
    if (!product) {
      return;
    }
    product.active = !(product.active);
  }
}
