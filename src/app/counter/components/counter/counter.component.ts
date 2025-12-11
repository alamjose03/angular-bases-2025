import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  constructor() { }

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public decreaseBy(value: number): void {
    this.counter -= value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
