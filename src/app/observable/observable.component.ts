import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  strim$!: Observable<string>;
  scrollHeight!: number;

  constructor() { }

  ngOnInit(): void {
    this.scrollHeight = this.setScrollHeight();
    this.scrollStrim();
  }

  setScrollHeight() {
    return Number(document.body.scrollHeight) - Number(window.innerHeight);
  }

  scrollStrim() {
    this.strim$ = fromEvent(document, 'scroll').pipe(
      map((val: any) => {
        return Math.round(parseInt(val.path[1].pageYOffset) / (this.scrollHeight / 100)) + '%';
      })
    );
  }
}
