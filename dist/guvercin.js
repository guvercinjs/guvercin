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
    LogLevels["DEBUG"] = "DEBUG";
    LogLevels["ERROR"] = "ERROR";
    LogLevels["INFO"] = "INFO";
    LogLevels["SUCCESS"] = "SUCCESS";
    LogLevels["WARNING"] = "WARNING";
})(LogLevels || (exports.LogLevels = LogLevels = {}));
const LogColors = {
    DEBUG: chalk_1.default.rgb(100, 100, 100),
    ERROR: chalk_1.default.rgb(255, 100, 100),
    INFO: chalk_1.default.rgb(100, 100, 255),
    SUCCESS: chalk_1.default.rgb(100, 255, 100),
    WARNING: chalk_1.default.rgb(250, 176, 5),
};
const writeToFile = (message, filePath) => {
    fs_1.default.appendFile(filePath, message, (err) => {
        if (err) {
            throw err;
        }
    });
};
const defaultSettings = {
    disabled: false,
    hideTime: false,
    jsonOutput: false,
    logPath: '',
    saveToLocal: false,
    separator: '-',
    timeFormat: 'YYYY-MM-DD HH:mm:ss',
    showErrorsOnly: false,
    remoteLogging: false,
    remoteLogEndpoint: '',
    name: undefined,
    scope: undefined,
};
class Guvercin {
    loadSettings() {
        try {
            const settings = JSON.parse(fs_1.default.readFileSync('./guvercin.config.json', 'utf-8'));
            return Object.assign(Object.assign({}, this.settings), settings);
        }
        catch (error) {
            return null;
        }
    }
    constructor(settings) {
        this.settings = defaultSettings;
        this.settings = this.loadSettings() || defaultSettings; // First reads file if exists
        this.settings = Object.assign(Object.assign({}, this.settings), settings); // Then overrides with given settings in constructor
    }
    getSettings() {
        return this.settings;
    }
    log(message, logLevel) {
        if (this.settings.disabled) {
            return;
        }
        if (!message) {
            throw new Error('Message is required');
        }
        if (!logLevel) {
            logLevel = LogLevels.INFO;
        }
        if (!Object.values(['SUCCESS', 'DEBUG', 'WARNING', 'ERROR', 'INFO']).includes(logLevel)) {
            this.warning(`Log level ${logLevel} is not valid. Using INFO as default.`);
            logLevel = LogLevels.INFO;
        }
        const time = this.settings.hideTime ? '' : (0, moment_1.default)().format(this.settings.timeFormat);
        const level = logLevel;
        const textColor = LogColors[logLevel];
        const separator = this.settings.separator;
        const name = this.settings.name == undefined ? '' : `(${this.settings.name}) - `;
        const scope = this.settings.scope == undefined ? '' : `(${this.settings.scope}) - `;
        const textColored = `${name}${time} ${separator} ${scope}${textColor(`[${level}]`)} ${separator} ${message}`;
        const textNotColored = `${name}${time} ${separator} [${level}] ${separator} ${message}`;
        // TODO: Add remote logging option
        // fetch('http://localhost:3000/log', { method: 'POST', body: JSON.stringify({ time, level, message }) })
        //   .then(() => {
        //     console.log('Log sent to localhost:3000')
        //     return
        //   })
        //   .catch(() => {
        //     console.log('Log could not be sent to localhost:3000')
        //     return
        //   })
        logLevel === 'ERROR'
            ? console.error(textColored)
            : logLevel === 'WARNING'
                ? console.warn(textColored)
                : console.log(textColored);
        if (this.settings.saveToLocal && this.settings.logPath) {
            writeToFile(`${textNotColored}\n`, this.settings.logPath);
        }
    }
    error(message) {
        this.log(message, LogLevels.ERROR);
    }
    warning(message) {
        this.log(message, LogLevels.WARNING);
    }
    success(message) {
        this.log(message, LogLevels.SUCCESS);
    }
    info(message) {
        this.log(message, LogLevels.INFO);
    }
    debug(message) {
        this.log(message, LogLevels.DEBUG);
    }
}
exports.Guvercin = Guvercin;
