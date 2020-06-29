import { TestBed } from '@angular/core/testing';

import { MarcaProductoService } from './marca-producto.service';

describe('MarcaProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcaProductoService = TestBed.get(MarcaProductoService);
    expect(service).toBeTruthy();
  });
});
