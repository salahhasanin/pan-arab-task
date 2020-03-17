import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticalsComponent } from './all-articals.component';

describe('AllArticalsComponent', () => {
  let component: AllArticalsComponent;
  let fixture: ComponentFixture<AllArticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllArticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
