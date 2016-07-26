import { Pizza } from '../domain/pizza';
import { PizzaService } from './pizza.service';
import { PIZZAS } from '../domain/data';

export class PizzaFileService implements PizzaService {
  getPizzas(): Pizza[] {
    return PIZZAS;
  }
}
