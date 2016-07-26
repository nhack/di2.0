import {Injectable} from '@angular/core';

import { Pizza } from '../domain/pizza';
import { PizzaService } from './pizza.service';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileService implements PizzaService {
  getPizzas(): Pizza[] {
    return PIZZAS;
  }
}
