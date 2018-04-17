import { TestBed, inject } from '@angular/core/testing';

import { ApiConnection } from './api-connection.service';

describe('ApiConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConnection]
    });
  });

  it('should be created', inject([ApiConnection], (service: ApiConnection) => {
    expect(service).toBeTruthy();
  }));
});
