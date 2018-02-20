import { TestBed, inject } from '@angular/core/testing';

import { NasaPatentService } from './nasa-patent.service';

describe('NasaPatentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaPatentService]
    });
  });

  it('should be created', inject([NasaPatentService], (service: NasaPatentService) => {
    expect(service).toBeTruthy();
  }));
});
