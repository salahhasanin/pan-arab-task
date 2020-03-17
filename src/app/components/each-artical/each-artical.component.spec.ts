import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachArticalComponent } from './each-artical.component';

describe('EachArticalComponent', () => {
  let component: EachArticalComponent;
  let fixture: ComponentFixture<EachArticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachArticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
