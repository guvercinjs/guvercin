export interface Settings {
    disabled?: boolean;
    hideTime?: boolean;
    jsonOutput?: boolean;
    logPath?: string;
    saveToLocal?: boolean;
    separator?: string;
    timeFormat?: string;
    showErrorsOnly?: boolean;
    remoteLogging?: boolean;
    remoteLogEndpoint?: string;
}
export declare enum LogLevels {
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING"
}
export declare class Guvercin {
    private settings;
    private loadSettings;
    constructor(settings?: Settings);
    getSettings(): Settings;
    log(message: string, logLevel: 'SUCCESS' | 'DEBUG' | 'WARNING' | 'ERROR' | 'INFO'): void;
    error(message: string): void;
    warning(message: string): void;
    success(message: string): void;
    info(message: string): void;
    debug(message: string): void;
}
