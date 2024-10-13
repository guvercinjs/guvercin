import chalk from "chalk";

export enum LogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
}

export const LogColor = {
  DEBUG: chalk.rgb(100, 100, 100),
  ERROR: chalk.rgb(255, 100, 100),
  INFO: chalk.rgb(100, 100, 255),
  SUCCESS: chalk.rgb(100, 255, 100),
  WARNING: chalk.rgb(250, 176, 5),
};

export interface Settings {
  enabled?: boolean;
  showTime?: boolean;
  saveToLocal?: boolean;
  logFilePath?: string;
  separator?: string;
  name?: string;
  scope?: string;
}
