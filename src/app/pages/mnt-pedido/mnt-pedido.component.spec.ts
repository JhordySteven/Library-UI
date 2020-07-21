import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntPedidoComponent } from './mnt-pedido.component';

describe('MntPedidoComponent', () => {
  let component: MntPedidoComponent;
  let fixture: ComponentFixture<MntPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
