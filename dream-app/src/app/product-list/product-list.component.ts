import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  private desc=true;
  private searchString:string;
  private img50: number=50;
  private isImageSeen:boolean=true;
   private products :any[] = [];/*[
    {
      "id": 1,
      "name": "Superb Leaf Rake",
      "code": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "id": 2,
      "name": "Garden Cart",
      "code": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "id": 3,
      "name": "Hammer",
      "code": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "id": 4,
      "name": "Saw",
      "code": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "id": 5,
      "name": "Video Game Controller",
      "code": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ]*/
  private filteredProducts :any[]=[];

  constructor(private _productService : ProductService){
    this._productService.getProducts()
    .subscribe(
        products =>{

        this.products=products,
          this.filteredProducts=this.products
        }
      )
      this.filteredProducts=this.products;
  }

  
  toggleImage(){
    this.isImageSeen=!this.isImageSeen;
  }

  productSearch(){
    this.filteredProducts=this.products.filter(product =>{
       return product.name.toUpperCase().indexOf(this.searchString.toUpperCase())!==-1;
    })
  }

  ratingClicked( event ){
    console.log( event );
  }

  toggleDesc($event){
    console.log($event);
    this.desc=!this.desc;
  }

}
