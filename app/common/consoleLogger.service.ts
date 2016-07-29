import { LoggerService } from './logger.service';

export class ConsoleLoggerService implements LoggerService {

  // how can we configure a provider if there is no default constructor?
  constructor(private logLevel: (message?: any, ...optionalParams: any[]) => void) { }

  log(msg: string) {
    this.logLevel(msg);
  }
}
