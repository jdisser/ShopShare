import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StapleItemComponent } from './staple-item.component';

describe('StapleItemComponent', () => {
  let component: StapleItemComponent;
  let fixture: ComponentFixture<StapleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StapleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StapleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
