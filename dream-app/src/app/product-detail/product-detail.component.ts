import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  // private product={
  //   "id": 1,
  //   "name": "Superb Leaf Rake",
  //   "code": "GDN-0011",
  //   "releaseDate": "March 19, 2016",
  //   "description": "Leaf rake with 48-inch wooden handle.",
  //   "price": 19.95,
  //   "starRating": 3.2,
  //   "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  // }

 private product;
 private productId;
 private review;/*[
  {
    "id": 1,
    "createdDate": "May 25, 2016",
    "reviewer": "John Doe",
    "productId": 1,
    "starRating": 4,
    "title": "Just go for it",
    "text": "Velit anim dolor consectetur qui esse Lorem aliqua id non. Deserunt elit cupidatat nisi id mollit ut fugiat labore eiusmod enim exercitation. Dolor est commodo aliquip enim ad anim dolore minim est veniam velit cupidatat commodo cupidatat. Ea laborum velit laboris dolor dolore eu dolor. Irure consectetur nulla nulla incididunt fugiat."
  },
  {
    "id": 3,
    "createdDate": "Jun 07, 2016",
    "reviewer": "Barry Barton",
    "productId": 1,
    "starRating": 5,
    "title": "Awesome product - sheer pleasure using it",
    "text": "Ea consequat ex velit aute cupidatat aute nulla officia mollit ut ut do. Officia esse mollit enim ad anim qui cillum eu in dolore Lorem sunt do. Deserunt eiusmod sint nisi proident. Ullamco adipisicing labore tempor ea et occaecat nostrud exercitation consectetur excepteur ipsum laboris. Duis culpa deserunt proident dolore nisi veniam fugiat irure sint. Eu quis labore consequat id ut fugiat elit aliquip ea. Amet ea amet ea sit."
  },
  {
    "reviewer": "Ravi",
    "starRating": "3",
    "title": "ok",
    "text": "ok ok",
    "productId": "1",
    "id": 4
  },
  {
    "reviewer": "Prasad",
    "starRating": "2",
    "title": "bad",
    "text": "bad",
    "createdDate": "Thu Mar 01 2018",
    "productId": "1",
    "id": 5
  },
  {
    "reviewer": "Akshay",
    "starRating": 4,
    "title": "Just go for it",
    "text": "Velit elit culpa in in aliquip dolore eiusmod exercitation eiusmod nulla.",
    "productId": "1",
    "id": 6
  }
];*/
  constructor(private _productservice:ProductService,
  private _activatedRoute:ActivatedRoute) {
    this.productId=this._activatedRoute.snapshot.params['id'];
    this._productservice.getProduct(this.productId)
    .subscribe(
        product => this.product=product,
    )

    this._productservice.getReview(this.productId)
    .subscribe(
      review => this.review=review
  )

   }

  ngOnInit() {
  }

  postReview(rev){
    this._productservice.postReview(this.productId,rev)
    .subscribe(
      response => this.review.push(response)
    )
  }
}
