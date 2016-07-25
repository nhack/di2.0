import {Component} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';
import {TabsComponent} from './components/tabs/tabs.component';
import {Pizza} from './domain/pizza';
import {PIZZAS} from './domain/data';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
