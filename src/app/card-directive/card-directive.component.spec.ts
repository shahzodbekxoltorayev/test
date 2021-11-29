import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDirectiveComponent } from './card-directive.component';

describe('CardDirectiveComponent', () => {
  let component: CardDirectiveComponent;
  let fixture: ComponentFixture<CardDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
