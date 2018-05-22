import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaplesComponent } from './edit-staples.component';

describe('EditStaplesComponent', () => {
  let component: EditStaplesComponent;
  let fixture: ComponentFixture<EditStaplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
