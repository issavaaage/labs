import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {from, fromEvent, Observable, timer} from "rxjs";
import {exhaustMap, finalize, map, mergeMapTo, pluck, switchMapTo, takeUntil, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements AfterViewInit {

  @ViewChild('start') startBtn!: ElementRef;
  @ViewChild('stop') stopBtn!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  startStrim$!: Observable<string>;
  stopStrim$!: Observable<any>;
  pollingStatus: string = 'Stopped';

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.startStrim$ = this.setupStartStrim();
    this.stopStrim$ = this.setupStopStrim();
  }

  setupStopStrim() {
    return fromEvent(this.stopBtn.nativeElement, 'click');
  }

  setupStartStrim() {
    return fromEvent(this.startBtn.nativeElement, 'click').pipe(
      exhaustMap(() => timer(0, 5000).pipe(
        tap(() => this.pollingStatus = 'Active'),
        switchMapTo(from(this.http.get('https://random.dog/woof.json')).pipe(
          pluck('url')
        )),
        takeUntil(this.stopStrim$),
        finalize(() => this.pollingStatus = 'Stopped')
      ))
    );
  }
}
