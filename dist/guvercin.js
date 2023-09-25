"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guvercin = void 0;
const moment = require("moment");
const chalk = __importStar(require("chalk"));
const fs = __importStar(require("fs"));
var LogLevels;
(function (LogLevels) {
    LogLevels["INFO"] = "INFO";
    LogLevels["ERROR"] = "ERROR";
    LogLevels["WARNING"] = "WARNING";
    LogLevels["DEBUG"] = "DEBUG";
    LogLevels["SUCCESS"] = "SUCCESS";
})(LogLevels || (LogLevels = {}));
const LogColors = {
    INFO: chalk.rgb(100, 100, 255),
    ERROR: chalk.rgb(255, 100, 100),
    WARNING: chalk.rgb(250, 176, 5),
    DEBUG: chalk.rgb(100, 100, 100),
    SUCCESS: chalk.rgb(100, 255, 100),
};
const writeToFile = (message, filePath) => {
    fs.appendFile(filePath, message, (err) => {
        if (err)
            throw err;
    });
};
class Guvercin {
    constructor(settings) {
        this.settings = {
            saveToLocal: false,
            logPath: './guvercin.log',
            separator: '-',
            timeFormat: 'YYYY-MM-DD HH:mm:ss',
            hideTime: false,
            jsonOutput: false,
            disabled: false,
        };
        this.settings = Object.assign(Object.assign({}, this.settings), settings);
    }
    log(message, logLevel) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        if (!logLevel)
            throw new Error('Log level is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = LogColors[logLevel];
        const level = logLevel;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    info(message) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = chalk.rgb(100, 100, 255);
        const level = LogLevels.INFO;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    error(message) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = chalk.rgb(255, 100, 100);
        const level = LogLevels.ERROR;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    warning(message) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = chalk.rgb(250, 176, 5);
        const level = LogLevels.WARNING;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    debug(message) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = chalk.rgb(100, 100, 100);
        const level = LogLevels.DEBUG;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    success(message) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        const time = moment().format(this.settings.timeFormat);
        const textColor = chalk.rgb(100, 255, 100);
        const level = LogLevels.SUCCESS;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.log(logTextColored);
        // TODO: Fix JSON output
        if (this.settings.saveToLocal) {
            if (this.settings.jsonOutput) {
                writeToFile(`${JSON.stringify({
                    time: time,
                    level: level,
                    message: message,
                })}\n`, this.settings.logPath);
            }
            else {
                writeToFile(`${logTextNotColored}\n`, this.settings.logPath);
            }
        }
    }
    getSettings() {
        return this.settings;
    }
}
exports.Guvercin = Guvercin;
