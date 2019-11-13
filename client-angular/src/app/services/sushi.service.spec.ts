import { TestBed } from '@angular/core/testing';

import { SushiService } from './sushi.service';

describe('SushiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SushiService = TestBed.get(SushiService);
    expect(service).toBeTruthy();
  });
});
