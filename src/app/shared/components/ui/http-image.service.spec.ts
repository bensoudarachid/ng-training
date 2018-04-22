import { TestBed, inject } from '@angular/core/testing';

import { HttpImageService } from './http-image.service';

describe('HttpImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpImageService]
    });
  });

  it('should be created', inject([HttpImageService], (service: HttpImageService) => {
    expect(service).toBeTruthy();
  }));
});
