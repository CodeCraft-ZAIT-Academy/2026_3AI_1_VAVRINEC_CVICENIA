import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookApiService } from './book-api.service';
import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookService,
        {
          provide: BookApiService,
          useValue: { getBooks: () => of([]) },
        },
      ],
    });
  });

  it('should create', () => {
    const service = TestBed.inject(BookService);
    expect(service).toBeTruthy();
  });
});
