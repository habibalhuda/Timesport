import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahGamehouseComponent } from './tambah-gamehouse.component';

describe('TambahGamehouseComponent', () => {
  let component: TambahGamehouseComponent;
  let fixture: ComponentFixture<TambahGamehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahGamehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahGamehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
