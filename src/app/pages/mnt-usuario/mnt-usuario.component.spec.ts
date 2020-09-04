import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntUsuarioComponent } from './mnt-usuario.component';

describe('MntUsuarioComponent', () => {
  let component: MntUsuarioComponent;
  let fixture: ComponentFixture<MntUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
