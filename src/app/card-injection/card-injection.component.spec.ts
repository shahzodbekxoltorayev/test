import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInjectionComponent } from './card-injection.component';

describe('CardInjectionComponent', () => {
  let component: CardInjectionComponent;
  let fixture: ComponentFixture<CardInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
