import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../../books/book';
import { BookService } from '../../../books/book.service';
import { BookForm } from '../../../books/components/book-form/book-form';

@Component({
  selector: 'app-admin-book-edit',
  imports: [BookForm, MatButtonModule],
  templateUrl: './admin-book-edit.html',
  styleUrl: './admin-book-edit.css',
})
export class AdminBookEdit {
  id = input<string>();

  private bookService = inject(BookService);
  private router = inject(Router);
  readonly isEditMode = computed(() => this.id() !== undefined);
  readonly book = computed(() => this.bookService.getBookById(Number(this.id())));

  save(book: Book): void {
    if (this.isEditMode()) {
      this.bookService.updateBook(book);
    } else {
      this.bookService.addBook(book);
    }

    this.router.navigate(['/admin']);
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }
}
