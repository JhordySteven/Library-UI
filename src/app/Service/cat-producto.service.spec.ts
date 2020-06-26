import { TestBed } from '@angular/core/testing';

import { CatProductoService } from './cat-producto.service';

describe('CatProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatProductoService = TestBed.get(CatProductoService);
    expect(service).toBeTruthy();
  });
});
