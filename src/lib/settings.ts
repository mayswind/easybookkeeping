import type {
    ApplicationSettingKey,
    ApplicationSettingValue,
    ApplicationSettingSubValue,
    BaseApplicationSetting,
    ApplicationSettings,
    LocaleDefaultSettings
} from '@/core/setting.ts';

import {
    DEFAULT_APPLICATION_SETTINGS,
    DEFAULT_LOCALE_SETTINGS
} from '@/core/setting.ts';

const settingsLocalStorageKey: string = 'ebk_app_settings';

export const rateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes'
}

function getStoredApplicationSettings(): BaseApplicationSetting {
    try {
        const storageData = localStorage.getItem(settingsLocalStorageKey) || '{}';
        return JSON.parse(storageData);
    } catch (ex) {
        console.warn('settings in local storage is invalid', ex);
        return {};
    }
}

export function getApplicationSettings(): ApplicationSettings {
    const storedApplicationSettings = getStoredApplicationSettings();

    for (const key in storedApplicationSettings) {
        if (!Object.prototype.hasOwnProperty.call(storedApplicationSettings, key)) {
            continue;
        }

        if (typeof(DEFAULT_APPLICATION_SETTINGS[key]) === 'object') {
            storedApplicationSettings[key] = Object.assign({}, DEFAULT_APPLICATION_SETTINGS[key], storedApplicationSettings[key]);
        }
    }

    return Object.assign({}, DEFAULT_APPLICATION_SETTINGS, storedApplicationSettings);
}

export function getLocaleDefaultSettings(): LocaleDefaultSettings {
    return Object.assign({}, DEFAULT_LOCALE_SETTINGS);
}

function updateApplicationSettings(settings: ApplicationSettings): void {
    const storageData = JSON.stringify(settings);
    return localStorage.setItem(settingsLocalStorageKey, storageData);
}

export function updateApplicationSettingsValue(key: ApplicationSettingKey, value: ApplicationSettingValue): void {
    if (!Object.prototype.hasOwnProperty.call(DEFAULT_APPLICATION_SETTINGS, key)) {
        return;
    }

    const settings = getApplicationSettings();
    settings[key] = value;

    return updateApplicationSettings(settings);
}

export function updateApplicationSettingsSubValue(key: ApplicationSettingKey, subKey: ApplicationSettingKey, value: ApplicationSettingSubValue): void {
    if (!Object.prototype.hasOwnProperty.call(DEFAULT_APPLICATION_SETTINGS, key)) {
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(DEFAULT_APPLICATION_SETTINGS[key], subKey)) {
        return;
    }

    const settings = getApplicationSettings();
    let options = settings[key];

    if (!options) {
        options = {};
    }

    (options as Record<string, ApplicationSettingSubValue>)[subKey] = value;
    settings[key] = options;

    return updateApplicationSettings(settings);
}

export function isEnableDebug(): boolean {
    return getApplicationSettings().debug;
}

export function getTheme(): string {
    return getApplicationSettings().theme;
}

export function isEnableApplicationLock(): boolean {
    return getApplicationSettings().applicationLock;
}

export function isEnableAnimate(): boolean {
    return getApplicationSettings().animate;
}

export function clearSettings(): void {
    localStorage.removeItem(settingsLocalStorageKey);
}
