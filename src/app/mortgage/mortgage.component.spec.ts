import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageComponent } from './mortgage.component';

describe('MortgageComponent', () => {
  let component: MortgageComponent;
  let fixture: ComponentFixture<MortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should patch value to length controller', () => {
    let testValue = 180;
    component.setupLength(testValue);
    let controllerValue = component.mortgageForm.get('length')?.value;
    expect(controllerValue).toEqual(testValue);
  });

  it('should return length controller value', () => {
    let testValue = 180;
    component.mortgageForm.get('length')?.patchValue(testValue);
    let value = component.getLength();
    expect(value).toEqual(testValue);
  });

  it('should return calculated mortgage', () => {
    let value = component.calculateMortgage(1000, 2000, 180);
    expect(Number(value)).toEqual(1666.67);
  });

  it('should return change values strim', () => {
    let strim$ = component.setupStrim();
    strim$.subscribe(value => {
      expect(value).toBeTruthy();
    })
  })
});
