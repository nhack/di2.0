import {ConsoleLoggerService} from './consoleLogger.service';

export let logLevelConsoleFactory = () => new ConsoleLoggerService(console.log.bind(console));
export let infoLevelConsoleFactory = () => new ConsoleLoggerService(console.info.bind(console));
export let warnLevelConsoleFactory = () => new ConsoleLoggerService(console.warn.bind(console));
export let errorLevelConsoleFactory = () => new ConsoleLoggerService(console.error.bind(console));
