import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamehouseComponent } from './gamehouse.component';

describe('GamehouseComponent', () => {
  let component: GamehouseComponent;
  let fixture: ComponentFixture<GamehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
