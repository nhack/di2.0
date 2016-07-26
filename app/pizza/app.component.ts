import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';
import { PizzaFileService } from './service/pizzaFile.service';

import { Pizza } from './domain/pizza';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pizza/app.component.html',
  styleUrls: ['app/pizza/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent]
})
export class AppComponent {

  private pizzaService: PizzaFileService = new PizzaFileService();
  private pizzas: Pizza[];

  constructor() {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
