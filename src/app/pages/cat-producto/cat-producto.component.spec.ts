import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProductoComponent } from './cat-producto.component';

describe('CatProductoComponent', () => {
  let component: CatProductoComponent;
  let fixture: ComponentFixture<CatProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
