import {OpaqueToken} from '@angular/core';

export interface LoggerService {
  log(message: string);
}

export let LOGGER_SERVICE = new OpaqueToken('app.logger.service');
