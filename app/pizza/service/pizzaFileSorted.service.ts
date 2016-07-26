import { Pizza } from '../domain/pizza';
import { PizzaService } from './pizza.service';
import { PIZZAS } from '../domain/data';

export class PizzaFileSortedService implements PizzaService {
  getPizzas(): Pizza[] {
    return PIZZAS.sort((p1: Pizza, p2: Pizza) => p1.price - p2.price);
  }
}
