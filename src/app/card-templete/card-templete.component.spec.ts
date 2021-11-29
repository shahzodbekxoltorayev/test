import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTempleteComponent } from './card-templete.component';

describe('CardTempleteComponent', () => {
  let component: CardTempleteComponent;
  let fixture: ComponentFixture<CardTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTempleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
