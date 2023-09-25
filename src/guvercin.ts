import * as moment from 'moment'
import * as chalk from 'chalk'
import * as fs from 'fs'

type Settings = {
  saveToLocal?: boolean
  logPath?: string
  separator?: string
  timeFormat?: string
  hideTime?: boolean
  jsonOutput?: boolean
  disabled?: boolean
}

enum LogLevels {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  DEBUG = 'DEBUG',
  SUCCESS = 'SUCCESS',
}

const LogColors = {
  INFO: chalk.rgb(100, 100, 255),
  ERROR: chalk.rgb(255, 100, 100),
  WARNING: chalk.rgb(250, 176, 5),
  DEBUG: chalk.rgb(100, 100, 100),
  SUCCESS: chalk.rgb(100, 255, 100),
}

const writeToFile = (message: string, filePath: string) => {
  fs.appendFile(filePath, message, (err) => {
    if (err) throw err
  })
}

export class Guvercin {
  private settings: Settings = {
    saveToLocal: false,
    logPath: './guvercin.log',
    separator: '-',
    timeFormat: 'YYYY-MM-DD HH:mm:ss',
    hideTime: false,
    jsonOutput: false,
    disabled: false,
  } as Settings
  constructor(settings?: Settings) {
    this.settings = { ...this.settings, ...settings }
  }

  log(
    message: string,
    logLevel: 'SUCCESS' | 'DEBUG' | 'WARNING' | 'ERROR' | 'INFO'
  ) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    if (!logLevel) throw new Error('Log level is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = LogColors[logLevel]
    const level = logLevel
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }

  info(message: string) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = chalk.rgb(100, 100, 255)
    const level = LogLevels.INFO
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }
  error(message: string) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = chalk.rgb(255, 100, 100)
    const level = LogLevels.ERROR
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }
  warning(message: string) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = chalk.rgb(250, 176, 5)
    const level = LogLevels.WARNING
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }
  debug(message: string) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = chalk.rgb(100, 100, 100)
    const level = LogLevels.DEBUG
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }
  success(message: string) {
    if (this.settings.disabled) return
    if (!message) throw new Error('Message is required')
    const time = moment().format(this.settings.timeFormat)
    const textColor = chalk.rgb(100, 255, 100)
    const level = LogLevels.SUCCESS
    const logTextColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }${textColor(`[${chalk.bold(level)}]`)} ${
      this.settings.separator
    } ${message}`
    const logTextNotColored = `${
      this.settings.hideTime ? '' : `${time} ${this.settings.separator} `
    }[${level}] ${this.settings.separator} ${message}`
    console.log(logTextColored)
    // TODO: Fix JSON output
    if (this.settings.saveToLocal) {
      if (this.settings.jsonOutput) {
        writeToFile(
          `${JSON.stringify({
            time: time,
            level: level,
            message: message,
          })}\n`,
          this.settings.logPath
        )
      } else {
        writeToFile(`${logTextNotColored}\n`, this.settings.logPath)
      }
    }
  }
  getSettings() {
    return this.settings
  }
}
