import { TestBed } from '@angular/core/testing';

import { MntProductoService } from './mnt-producto.service';

describe('MntProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MntProductoService = TestBed.get(MntProductoService);
    expect(service).toBeTruthy();
  });
});
