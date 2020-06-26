import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MntMenuComponent } from './mnt-menu.component';

describe('MntMenuComponent', () => {
  let component: MntMenuComponent;
  let fixture: ComponentFixture<MntMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
