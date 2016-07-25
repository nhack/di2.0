import {Component, Input} from 'angular2/core';
import {Review} from '../../domain/review';

@Component({
  selector: 'reviews',
  templateUrl: 'app/pizza/components/reviews/reviews.component.html',
  styleUrls: ['app/pizza/components/reviews/reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  private reviews: Review[];

  private newReview: Review;

  constructor() {
    this.newReview = <Review>{};
  }

  public onSubmit(){
    this.newReview.createdOn = new Date().getMilliseconds();
    this.reviews.push(this.newReview);
    this.newReview = <Review>{};
  }
}
