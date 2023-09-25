"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guvercin = exports.LogLevels = void 0;
const moment_1 = __importDefault(require("moment"));
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
var LogLevels;
(function (LogLevels) {
    LogLevels["INFO"] = "INFO";
    LogLevels["ERROR"] = "ERROR";
    LogLevels["WARNING"] = "WARNING";
    LogLevels["DEBUG"] = "DEBUG";
    LogLevels["SUCCESS"] = "SUCCESS";
})(LogLevels || (exports.LogLevels = LogLevels = {}));
const LogColors = {
    INFO: chalk_1.default.rgb(100, 100, 255),
    ERROR: chalk_1.default.rgb(255, 100, 100),
    WARNING: chalk_1.default.rgb(250, 176, 5),
    DEBUG: chalk_1.default.rgb(100, 100, 100),
    SUCCESS: chalk_1.default.rgb(100, 255, 100),
};
const writeToFile = (message, filePath) => {
    fs_1.default.appendFile(filePath, message, (err) => {
        if (err)
            throw err;
    });
};
const defaultSettings = {
    saveToLocal: false,
    logPath: '',
    separator: '-',
    timeFormat: 'YYYY-MM-DD HH:mm:ss',
    hideTime: false,
    jsonOutput: false,
    disabled: false,
};
class Guvercin {
    loadSettings() {
        try {
            const settings = JSON.parse(fs_1.default.readFileSync('./guvercin.config.json', 'utf-8'));
            this.settings = Object.assign(Object.assign({}, this.settings), settings);
            return this.settings;
        }
        catch (error) {
            if (error.code == 'ENOENT') {
                this.settings = defaultSettings;
            }
            else {
                return null;
            }
        }
    }
    constructor(settings) {
        this.settings = defaultSettings;
        this.settings = this.loadSettings() || defaultSettings;
        this.settings = Object.assign(Object.assign({}, this.settings), settings);
    }
    log(message, logLevel) {
        if (this.settings.disabled)
            return;
        if (!message)
            throw new Error('Message is required');
        if (!logLevel)
            throw new Error('Log level is required');
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = LogColors[logLevel];
        const level = logLevel;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
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
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = chalk_1.default.rgb(100, 100, 255);
        const level = LogLevels.INFO;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
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
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = chalk_1.default.rgb(255, 100, 100);
        const level = LogLevels.ERROR;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.error(logTextColored);
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
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = chalk_1.default.rgb(250, 176, 5);
        const level = LogLevels.WARNING;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
        const logTextNotColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}[${level}] ${this.settings.separator} ${message}`;
        console.warn(logTextColored);
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
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = chalk_1.default.rgb(100, 100, 100);
        const level = LogLevels.DEBUG;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
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
        const time = (0, moment_1.default)().format(this.settings.timeFormat);
        const textColor = chalk_1.default.rgb(100, 255, 100);
        const level = LogLevels.SUCCESS;
        const logTextColored = `${this.settings.hideTime ? '' : `${time} ${this.settings.separator} `}${textColor(`[${chalk_1.default.bold(level)}]`)} ${this.settings.separator} ${message}`;
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
