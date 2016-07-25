import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {TabsComponent} from './components/tabs/tabs.component';
import {Pizza} from './domain/pizza';
import {PIZZAS} from './domain/data';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pizza/app.component.html',
  styleUrls: ['app/pizza/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
