import { Component } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  books: Book[] = [
 {
  id: 1,
  title: 'My dress up darling vol. 1',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: true,
  genre: 'Manga'
 },
 {
  id: 2,
  title: 'My dress up darling vol. 2',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: false,
  genre: 'Manga'
 },
 {
  id: 3,
  title: 'My dress up darling vol. 3',
  author: 'Shinichi Fukuda',
  year: 2020,
  available: true,
  genre: 'Manga'
 }
];
}

