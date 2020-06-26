import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaProductoComponent } from './marca-producto.component';

describe('MarcaProductoComponent', () => {
  let component: MarcaProductoComponent;
  let fixture: ComponentFixture<MarcaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
