import { TestBed } from '@angular/core/testing';

import { GamehouseService } from './gamehouse.service';

describe('GamehouseService', () => {
  let service: GamehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
