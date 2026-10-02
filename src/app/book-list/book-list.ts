import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookCard } from '../book-card/book-card';
import { Book } from '../book';
import { generateBooks } from '../book-generator';

@Component({
  selector: 'app-book-list',
  imports: [BookCard, MatButtonModule, MatIconModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  myBooks: Book[] = [
    {
  id: 1,
  title: 'My dress up darling vol. 1',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: true,
  genre: 'Manga',
  rating: 4.5,
  pages: 180,
  favorite: false
 },
 {
  id: 2,
  title: 'My dress up darling vol. 2',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: false,
  genre: 'Manga',
  rating: 4.0,
  pages: 190,
  favorite: true
 },
 {
  id: 3,
  title: 'My dress up darling vol. 3',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: true,
  genre: 'Manga',
  rating: 4.2,
  pages: 200,
  favorite: false
 }
  ];

  books: Book[] = this.myBooks.concat(generateBooks(40, 4));

  currentPage: number = 1;
  pageSize: number = 5;

  pageCount(): number {
    return Math.ceil(this.books.length / this.pageSize);
  }

  isOnCurrentPage(index: number): boolean {
    const start = (this.currentPage - 1) * this.pageSize;
    return index >= start && index < start + this.pageSize;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.pageCount()) {
      this.currentPage++;
    }
  }
}
