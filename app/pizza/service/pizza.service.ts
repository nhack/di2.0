import { Pizza } from '../domain/pizza';

export interface PizzaService {
  getPizzas(): Pizza[];
}
