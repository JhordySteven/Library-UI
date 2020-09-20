import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntCategoriaMenuComponent } from './mnt-categoria-menu.component';

describe('MntCategoriaMenuComponent', () => {
  let component: MntCategoriaMenuComponent;
  let fixture: ComponentFixture<MntCategoriaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntCategoriaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntCategoriaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
