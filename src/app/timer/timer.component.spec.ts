import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return click strim', () => {
    let strim$ = component.clickStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    });
  })

  it('should return timer strim', () => {
    let strim$ = component.timerStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    })
  })
});
