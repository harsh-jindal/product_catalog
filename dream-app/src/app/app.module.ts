import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EllipsizePipe } from './ellipsize.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService} from '../app/product.service';
import { AppComponent } from './app/app.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
  declarations: [
    ProductListComponent,
    StarRatingComponent,
    EllipsizePipe,
    ProductDetailComponent,
    AppComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'products',component:ProductListComponent},
        {path:'products/:id', component:ProductDetailComponent},
        {path:'about', component:AboutComponent},
        {path:'feedback', component:FeedbackComponent},
        {path:'**', redirectTo:'/products'}
      ]
    )

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
