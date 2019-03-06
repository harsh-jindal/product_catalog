import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  private numFullstars:number;
  private numHalfstars:number;
  private numEmptystars:number;


  ngOnChanges() {
    this.numFullstars=Math.floor(this.rating);
    this.numHalfstars= this.rating-this.numFullstars>0.5 ? 1 :0;
    this.numEmptystars=5-this.numFullstars-this.numHalfstars;
  }

  @Input()
  private rating:number;
  private arr=Array;

  @Output()
  private clickRating: EventEmitter<any> = new EventEmitter<any>();
  
  

  clicked(type,i){
    this.clickRating.emit({
      starType: type,
      number:i 
    }
    )
  }

}
