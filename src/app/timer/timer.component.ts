import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {mapTo, scan, startWith, takeUntil, takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, AfterViewInit {

  @ViewChild('stopTimer') button!: ElementRef;

  strim$!: Observable<number>;
  buttonClick$!: Observable<MouseEvent>
  COUNTDOWN_FROM: number = 10;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buttonClick$ = this.clickStrim();
    this.strim$ = this.timerStrim();
    this.cd.detectChanges();
  }

  clickStrim(): Observable<MouseEvent> {
    return fromEvent(this.button.nativeElement, 'click');
  }

  timerStrim(): Observable<number> {
    return interval(1000).pipe(
      mapTo(-1),
      scan((acc, curr) => {
        return acc + curr;
      }, this.COUNTDOWN_FROM),
      takeWhile(val => val >= 0),
      takeUntil(this.buttonClick$),
      startWith(this.COUNTDOWN_FROM),
    )
  }
}
