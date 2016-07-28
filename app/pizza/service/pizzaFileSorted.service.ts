import { Injectable, Inject, Optional } from '@angular/core';

import { LoggerService, LOGGER_SERVICE } from '../../common/logger.service';

import { Pizza } from '../domain/pizza';
import { PizzaService } from './pizza.service';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileSortedService implements PizzaService {

  constructor( @Optional() @Inject(LOGGER_SERVICE) private logger: LoggerService) { }

  getPizzas(): Pizza[] {
    if (this.logger) { this.logger.log('SORT BY PRICE'); }
    return PIZZAS.sort((p1: Pizza, p2: Pizza) => p1.price - p2.price);
  }
}
