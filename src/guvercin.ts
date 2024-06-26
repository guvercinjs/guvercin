import moment from 'moment'
import chalk from 'chalk'
import fs from 'fs'

export interface Settings {
  disabled?: boolean
  hideTime?: boolean
  logPath?: string
  saveToLocal?: boolean
  separator?: string
  timeFormat?: string
  showErrorsOnly?: boolean
  remoteLogging?: boolean
  remoteLogEndpoint?: string
  name?: string
  scope?: string
}

export enum LogLevels {
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
}

const LogColors = {
  DEBUG: chalk.rgb(100, 100, 100),
  ERROR: chalk.rgb(255, 100, 100),
  INFO: chalk.rgb(100, 100, 255),
  SUCCESS: chalk.rgb(100, 255, 100),
  WARNING: chalk.rgb(250, 176, 5),
}

const writeToFile = (message: string, filePath: string) => {
  fs.appendFile(filePath, message, (err) => {
    if (err) {
      throw err
    }
  })
}

const defaultSettings: Settings = {
  disabled: false,
  hideTime: false,
  logPath: '',
  saveToLocal: false,
  separator: '-',
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  showErrorsOnly: false,
  remoteLogging: false,
  remoteLogEndpoint: '',
  name: undefined,
  scope: undefined,
}

export class Guvercin {
  private settings: Settings = defaultSettings
  private loadSettings() {
    try {
      const settings = JSON.parse(fs.readFileSync('./guvercin.config.json', 'utf-8'))
      return { ...this.settings, ...settings }
    } catch (error) {
      return null
    }
  }
  constructor(settings?: Settings) {
    this.settings = this.loadSettings() || defaultSettings // First reads file if exists
    this.settings = { ...this.settings, ...settings } // Then overrides with given settings in constructor
  }
  getSettings() {
    return this.settings
  }
  log(message: string, logLevel: 'SUCCESS' | 'DEBUG' | 'WARNING' | 'ERROR' | 'INFO') {
    if (this.settings.disabled) {
      return
    }
    if (!message) {
      throw new Error('Message is required')
    }
    if (!logLevel) {
      logLevel = LogLevels.INFO
    }
    if (!Object.values(['SUCCESS', 'DEBUG', 'WARNING', 'ERROR', 'INFO']).includes(logLevel)) {
      this.warning(`Log level ${logLevel} is not valid. Using INFO as default.`)
      logLevel = LogLevels.INFO
    }
    const time = this.settings.hideTime ? '' : moment().format(this.settings.timeFormat)
    const level = logLevel
    const textColor = LogColors[logLevel]
    const separator = this.settings.separator
    const name = this.settings.name == undefined ? '' : `(${this.settings.name}) - `
    const scope = this.settings.scope == undefined ? '' : `(${this.settings.scope}) - `
    const textColored = `${name}${time} ${separator} ${scope}${textColor(`[${level}]`)} ${separator} ${message}`
    const textNotColored = `${name}${time} ${separator} [${level}] ${separator} ${message}`

    logLevel === 'ERROR'
      ? console.error(textColored)
      : logLevel === 'WARNING'
        ? console.warn(textColored)
        : console.log(textColored)
    if (this.settings.saveToLocal && this.settings.logPath) {
      writeToFile(`${textNotColored}\n`, this.settings.logPath)
    }
  }
  error(message: string) {
    this.log(message, LogLevels.ERROR)
  }
  warning(message: string) {
    this.log(message, LogLevels.WARNING)
  }
  success(message: string) {
    this.log(message, LogLevels.SUCCESS)
  }
  info(message: string) {
    this.log(message, LogLevels.INFO)
  }
  debug(message: string) {
    this.log(message, LogLevels.DEBUG)
  }
}
