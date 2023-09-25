type Settings = {
    saveToLocal?: boolean;
    logPath?: string;
    separator?: string;
    timeFormat?: string;
    hideTime?: boolean;
    jsonOutput?: boolean;
    disabled?: boolean;
};
export declare enum LogLevels {
    INFO = "INFO",
    ERROR = "ERROR",
    WARNING = "WARNING",
    DEBUG = "DEBUG",
    SUCCESS = "SUCCESS"
}
export declare class Guvercin {
    private settings;
    constructor(settings?: Settings);
    log(message: string, logLevel: 'SUCCESS' | 'DEBUG' | 'WARNING' | 'ERROR' | 'INFO'): void;
    info(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    debug(message: string): void;
    success(message: string): void;
    getSettings(): Settings;
}
export {};
