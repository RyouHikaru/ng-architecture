import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor() {
    this.count$ = new Observable<number>;
  }

  increment() {}
  decrement() {}
  reset() {}

}
