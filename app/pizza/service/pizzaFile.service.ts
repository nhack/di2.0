import {Pizza} from '../domain/pizza';
import {PIZZAS} from '../domain/data';

export class PizzaFileService {
  getPizzas():Pizza[]{
    return PIZZAS;
  }
}
