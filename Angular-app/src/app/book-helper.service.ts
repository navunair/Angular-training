import { Injectable } from '@angular/core';

@Injectable()
export class BookHelperService {

  constructor() { }
  public bookSummary = [
    {
    Bname : 'Philosopher stone',
    summary : "Summary of this book"
  },
  {
    Bname : 'Chamber of secrets',
    summary : "Summary of another book"
  },
  {
    Bname : 'Prisoner of Azkaban',
    summary : "Summary of a book"
  },
  {
    Bname : 'Goblet of fire',
    summary : "Summary of harry potter book"
  },
  {
    Bname : 'Order of Phoenix',
    summary : "Summary of the fifth book"
  }  
]
  public upperCaseBooks (books: Array<String>): Array<String>{
    return books.map(book => book.toUpperCase());
  }
  public toTitleCase(summary: string): string{
    const words = summary.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return words.join(' ');  
  }

  public getSummary(name : string): string{
    
    const summary = this.bookSummary.find(item => item.Bname.toLowerCase() == name.toLowerCase());
    if(summary)
      return summary.summary;
    else
      return 'Not found';
  }


}
