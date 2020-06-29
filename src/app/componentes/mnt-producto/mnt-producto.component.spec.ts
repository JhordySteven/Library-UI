import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntProductoComponent } from './mnt-producto.component';

describe('MntProductoComponent', () => {
  let component: MntProductoComponent;
  let fixture: ComponentFixture<MntProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
