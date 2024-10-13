import { LogLevel, Settings, LogColor } from "./types";
import fs from "fs";

const defaultSettings: Settings = {
  enabled: true,
  showTime: true,
  saveToLocal: false,
  logFilePath: "./guvercin.log",
  separator: "#",
};

class Guvercin {
  constructor(settings?: Settings) {
    this.settings = {
      ...defaultSettings,
      ...settings, // Overwrite default settings with provided settings in constructor
    };
  }
  private settings: Settings;

  /**
   * Get the current settings of the logger
   */
  public getSettings() {
    return this.settings;
  }

  /**
   * Log a message with a given level
   * @param level - The level of the message
   * @param message - The message to log
   */
  public log(level: LogLevel, message: string) {
    if (!this.settings.enabled) {
      return;
    }
    const color = LogColor[level];
    const scope = this.settings.scope ? `[${this.settings.scope}] ` : "";
    const separator = this.settings.separator
      ? `${this.settings.separator} `
      : "";
    const name = this.settings.name
      ? `[${this.settings.name}] ${separator}`
      : "";
    const time = this.settings.showTime
      ? `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${separator}`
      : "";
    const logMessage = `${time}${name}${scope}${separator}${color(`[${level}]`)} ${message}`;
    const logMessageWithoutColor = `${time}${name}${scope}${separator}${`[${level}]`} ${message}`;
    if (this.settings.saveToLocal) {
      try {
        fs.appendFileSync(
          this.settings.logFilePath,
          `${logMessageWithoutColor}\n`,
        );
      } catch (error) {
        this.error(`Failed to save log to local file: ${error}`);
      }
    }
    console.log(logMessage);
  }

  /**
   * Log a debug message
   * @param message - The message to log
   */
  public debug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }

  /**
   * Log an error message
   * @param message - The message to log
   */
  public error(message: string) {
    this.log(LogLevel.ERROR, message);
  }

  /**
   * Log an info message
   * @param message - The message to log
   */
  public info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  /**
   * Log a success message
   * @param message - The message to log
   */
  public success(message: string) {
    this.log(LogLevel.SUCCESS, message);
  }

  /**
   * Log a warning message
   * @param message - The message to log
   */
  public warning(message: string) {
    this.log(LogLevel.WARNING, message);
  }
}

export default Guvercin;
