import { Component, ViewEncapsulation, provide, Inject } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';
import { PizzaService, PIZZA_SERVICE } from './service/pizza.service';
import { PizzaFileService } from './service/pizzaFile.service';
import { PizzaFileSortedService } from './service/pizzaFileSorted.service';

import { Pizza } from './domain/pizza';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pizza/app.component.html',
  styleUrls: ['app/pizza/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent],
  providers: [provide(PIZZA_SERVICE, { useClass: PizzaFileSortedService })]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor( @Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
