import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingComponent } from './polling.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PollingComponent', () => {
  let component: PollingComponent;
  let fixture: ComponentFixture<PollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return start strim', () => {
    let strim$ = component.setupStartStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    })
  });

  it('should return stop strim', () => {
    let strim$ = component.setupStopStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    })
  })
});
