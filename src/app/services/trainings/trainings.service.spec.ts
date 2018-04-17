import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http'

import { TrainingsService } from './trainings.service';

describe('TrainingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingsService],
      imports: [
        HttpModule
      ],
    });
  });

  it('should be created', inject([TrainingsService], (service: TrainingsService) => {
    expect(service).toBeTruthy();
  }));
});
