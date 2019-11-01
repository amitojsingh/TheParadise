import { TestBed } from '@angular/core/testing';

import { bookServiceService } from './book-service.service';

describe('bookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: bookServiceService = TestBed.get(bookServiceService);
    expect(service).toBeTruthy();
  });
});
