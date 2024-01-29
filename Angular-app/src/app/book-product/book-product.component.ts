import { Component, Input } from '@angular/core';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrl: './book-product.component.css'
})
export class BookProductComponent {
  public bookReview: String = "Welcome to Jungle"
  activate = false;
  @Input('selectedBook') abcd! : string
  constructor (private readonly reviewUpperCase: BookHelperService){
    
  }
  public ngOnInit(): void{
    const bookReview = [this.bookReview];
    this.bookReview = this.reviewUpperCase.upperCaseBooks(bookReview)[0];
  }
  public toggleActive(){
    this.activate = !this.activate;
  }
}
