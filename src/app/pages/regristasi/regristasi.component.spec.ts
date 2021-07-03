import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristasiComponent } from './regristasi.component';

describe('RegristasiComponent', () => {
  let component: RegristasiComponent;
  let fixture: ComponentFixture<RegristasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegristasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegristasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
