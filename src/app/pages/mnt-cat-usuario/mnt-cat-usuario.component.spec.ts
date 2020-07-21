import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntCatUsuarioComponent } from './mnt-cat-usuario.component';

describe('MntCatUsuarioComponent', () => {
  let component: MntCatUsuarioComponent;
  let fixture: ComponentFixture<MntCatUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntCatUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntCatUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
