import { TestBed } from '@angular/core/testing';

import { MenueLoaderService } from './menue-loader.service';

describe('MenueLoaderService', () => {
  let service: MenueLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenueLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
