import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamehouseComponent } from './edit-gamehouse.component';

describe('EditGamehouseComponent', () => {
  let component: EditGamehouseComponent;
  let fixture: ComponentFixture<EditGamehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGamehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
