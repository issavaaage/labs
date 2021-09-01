import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponent } from './observable.component';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: ComponentFixture<ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return scroll height', () => {
    let height = component.setScrollHeight();
    expect(height).toBeTruthy();
  });

  it('should return scroll strim', () => {
    let strim$ = component.scrollStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    })
  })
});
