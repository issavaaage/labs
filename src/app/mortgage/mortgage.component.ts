import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest, Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {

  mortgageForm: FormGroup = new FormGroup({
    amount: new FormControl(),
    rate: new FormControl(),
    length: new FormControl()
  })

  strim$!: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.strim$ = this.setupStrim();
  }

  setupLength(length: number) {
    this.mortgageForm.get('length')?.patchValue(length);
  }

  getLength() {
    return this.mortgageForm.get('length')?.value;
  }

  setupStrim() {
    return combineLatest(
      this.mortgageForm.get('amount')!.valueChanges.pipe(map(val => Number(val))),
      this.mortgageForm.get('rate')!.valueChanges.pipe(map(val => Number(val))),
      this.mortgageForm.get('length')!.valueChanges.pipe(map(val => Number(val)))
    ).pipe(
      map(([loanAmount, interest, loanLength]) => {
        return this.calculateMortgage(loanAmount, interest, loanLength);
      })
    );
  }

  calculateMortgage(loanAmount: number, interest: number, loanLength: number) {
    const calculatedInterest = interest / 1200;
    const total = loanAmount * calculatedInterest /
      (1 - (Math.pow(1/(1 + calculatedInterest), loanLength)))
    return total.toFixed(2);
  }
}
