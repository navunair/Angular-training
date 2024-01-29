import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [
    CommonModule,
    BrowserModule
  ],
  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.css'
})
export class BookRetailComponent implements OnInit{
  @Input('title') title!: string;
  @Input('subtitle') subTitle!: string;
  @Output('selectedBook') selectedBook = new EventEmitter<string>()
  public bookSummary!: string;
  constructor ( private readonly bookHelperService: BookHelperService) {
   
  }
  public bookRetailDetails: any=[];
  public authorBooks: any = [];
  
  public ngOnInit(): void {
    this.bookRetailDetails = [{
      name: 'J K Rowling',
      books: ['Philosopher stone', 'Chamber of secrets', 'Prisoner of Azkaban']
    },
    {
      name: 'Nevin',
      books: ['Goblet of fire', 'Order of Phoenix']
    }
  ]
 }

 public showBook(index: number) : void{
  this.authorBooks = this.bookRetailDetails[index].books;
  this.authorBooks = this.bookHelperService.upperCaseBooks(this.authorBooks);
 }
 public showSummary(name: string) : void{
  // let summary = this.bookSummary[name];
  const bookSummary = this.bookHelperService.getSummary(name);
  this.bookSummary = this.bookHelperService.toTitleCase(bookSummary);

 }
 public selectBook(index: number) {
  const book = this.authorBooks[index];
  this.selectedBook.emit(book);
 }
}

