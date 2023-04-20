import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createI18n } from 'vue-i18n';

import moment from "moment-timezone";

import Framework7 from 'framework7/lite';
import Framework7Dialog from 'framework7/components/dialog';
import Framework7Popup from 'framework7/components/popup';
import Framework7LoginScreen from 'framework7/components/login-screen';
import Framework7Popover from 'framework7/components/popover';
import Framework7Actions from 'framework7/components/actions';
import Framework7Sheet from 'framework7/components/sheet';
import Framework7Toast from 'framework7/components/toast';
import Framework7Preloader from 'framework7/components/preloader';
import Framework7Progressbar from 'framework7/components/progressbar';
import Framework7Sortable from 'framework7/components/sortable';
import Framework7Swipeout from 'framework7/components/swipeout';
import Framework7Accordion from 'framework7/components/accordion';
import Framework7Card from 'framework7/components/card';
import Framework7Chip from 'framework7/components/chip';
import Framework7Form from 'framework7/components/form';
import Framework7Input from 'framework7/components/input';
import Framework7Checkbox from 'framework7/components/checkbox';
import Framework7Radio from 'framework7/components/radio';
import Framework7Toggle from 'framework7/components/toggle';
import Framework7SmartSelect from 'framework7/components/smart-select';
import Framework7Grid from 'framework7/components/grid';
import Framework7Calendar from 'framework7/components/calendar';
import Framework7Picker from 'framework7/components/picker';
import Framework7InfiniteScroll from 'framework7/components/infinite-scroll';
import Framework7PullToRefresh from 'framework7/components/pull-to-refresh';
import Framework7Searchbar from 'framework7/components/searchbar';
import Framework7Tooltip from 'framework7/components/tooltip';
import Framework7Skeleton from 'framework7/components/skeleton';
import Framework7Treeview from 'framework7/components/treeview';
import Framework7Typography from 'framework7/components/typography';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

import 'framework7/css';
import 'framework7/components/dialog/css';
import 'framework7/components/popup/css';
import 'framework7/components/login-screen/css';
import 'framework7/components/popover/css';
import 'framework7/components/actions/css';
import 'framework7/components/sheet/css';
import 'framework7/components/toast/css';
import 'framework7/components/preloader/css';
import 'framework7/components/progressbar/css';
import 'framework7/components/sortable/css';
import 'framework7/components/swipeout/css';
import 'framework7/components/accordion/css';
import 'framework7/components/card/css';
import 'framework7/components/chip/css';
import 'framework7/components/form/css';
import 'framework7/components/input/css';
import 'framework7/components/checkbox/css';
import 'framework7/components/radio/css';
import 'framework7/components/toggle/css';
import 'framework7/components/smart-select/css';
import 'framework7/components/grid/css';
import 'framework7/components/calendar/css';
import 'framework7/components/picker/css';
import 'framework7/components/infinite-scroll/css';
import 'framework7/components/pull-to-refresh/css';
import 'framework7/components/searchbar/css';
import 'framework7/components/tooltip/css';
import 'framework7/components/skeleton/css';
import 'framework7/components/treeview/css';
import 'framework7/components/typography/css';

import 'framework7-icons';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import api from './consts/api.js';
import datetime from './consts/datetime.js';
import currency from './consts/currency.js';
import colors from './consts/color.js';
import icons from './consts/icon.js';
import account from './consts/account.js';
import transaction from './consts/transaction.js';
import category from './consts/category.js';
import statistics from './consts/statistics.js';

import licenses from './lib/licenses.js';
import version from './lib/version.js';
import logger from './lib/logger.js';
import settings from './lib/settings.js';
import services from './lib/services.js';
import userstate from './lib/userstate.js';
import webauthn from './lib/webauthn.js';
import utils from './lib/utils.js';
import {
    getAllLanguageInfos,
    getLanguageInfo,
    getDefaultLanguage,
    transateIf,
    getAllLongMonthNames,
    getAllShortMonthNames,
    getAllLongWeekdayNames,
    getAllShortWeekdayNames,
    getAllMinWeekdayNames,
    getInputTimeIntlDateTimeFormatOptions,
    getAllTimezones,
    getAllCurrencies,
    getDisplayCurrency,
    getI18nOptions,
} from './lib/i18n.js';
import {
    showAlert,
    showConfirm,
    showToast,
    showLoading,
    hideLoading,
    routeBackOnError,
    isModalShowing,
    onSwipeoutDeleted
} from './lib/mobile/ui.js';

import stores from './store/index.js';

import ItemIcon from './components/mobile/ItemIcon.vue';
import PieChart from './components/mobile/PieChart.vue';
import PasswordInputSheet from './components/mobile/PasswordInputSheet.vue';
import PasscodeInputSheet from './components/mobile/PasscodeInputSheet.vue';
import PinCodeInputSheet from './components/mobile/PinCodeInputSheet.vue';
import DateRangeSelectionSheet from './components/mobile/DateRangeSelectionSheet.vue';
import ListItemSelectionSheet from './components/mobile/ListItemSelectionSheet.vue';
import TwoColumnListItemSelectionSheet from './components/mobile/TwoColumnListItemSelectionSheet.vue';
import TreeViewSelectionSheet from './components/mobile/TreeViewSelectionSheet.vue';
import IconSelectionSheet from './components/mobile/IconSelectionSheet.vue';
import ColorSelectionSheet from './components/mobile/ColorSelectionSheet.vue';
import InformationSheet from './components/mobile/InformationSheet.vue';
import NumberPadSheet from './components/mobile/NumberPadSheet.vue';
import TransactionTagSelectionSheet from './components/mobile/TransactionTagSelectionSheet.vue';

import TextareaAutoSize from "./directives/mobile/textareaAutoSize.js";

import App from './Mobile.vue';

Framework7.use([
    Framework7Dialog,
    Framework7Popup,
    Framework7LoginScreen,
    Framework7Popover,
    Framework7Actions,
    Framework7Sheet,
    Framework7Toast,
    Framework7Preloader,
    Framework7Progressbar,
    Framework7Sortable,
    Framework7Swipeout,
    Framework7Accordion,
    Framework7Card,
    Framework7Chip,
    Framework7Form,
    Framework7Input,
    Framework7Checkbox,
    Framework7Radio,
    Framework7Toggle,
    Framework7SmartSelect,
    Framework7Grid,
    Framework7Calendar,
    Framework7Picker,
    Framework7InfiniteScroll,
    Framework7PullToRefresh,
    Framework7Searchbar,
    Framework7Tooltip,
    Framework7Skeleton,
    Framework7Treeview,
    Framework7Typography,
    Framework7Vue
]);

const app = createApp(App);
const store = createStore(stores);
const i18n = createI18n(getI18nOptions());
registerComponents(app);
app.use(store);
app.use(i18n);

function setLanguage(locale) {
    if (settings.getLanguage() !== locale) {
        settings.setLanguage(locale);
    }

    i18n.global.locale.value = locale;
    moment.locale(locale, {
        months : app.config.globalProperties.$locale.getAllLongMonthNames(),
        monthsShort : app.config.globalProperties.$locale.getAllShortMonthNames(),
        weekdays : app.config.globalProperties.$locale.getAllLongWeekdayNames(),
        weekdaysShort : app.config.globalProperties.$locale.getAllShortWeekdayNames(),
        weekdaysMin : app.config.globalProperties.$locale.getAllMinWeekdayNames(),
    });
    services.setLocale(locale);
    document.querySelector('html').setAttribute('lang', locale);

    const defaultCurrency = i18n.global.t('default.currency');
    const defaultFirstDayOfWeekName = i18n.global.t('default.firstDayOfWeek');
    let defaultFirstDayOfWeek = datetime.defaultFirstDayOfWeek;

    if (datetime.allWeekDays[defaultFirstDayOfWeekName]) {
        defaultFirstDayOfWeek = datetime.allWeekDays[defaultFirstDayOfWeekName].type;
    }

    store.dispatch('updateLocalizedDefaultSettings', { defaultCurrency, defaultFirstDayOfWeek });

    return locale;
}

function setTimezone(timezone) {
    if (timezone) {
        settings.setTimezone(timezone);
        moment.tz.setDefault(timezone);
    } else {
        settings.setTimezone('');
        moment.tz.setDefault();
    }
}

function initLocale() {
    if (settings.getLanguage()) {
        logger.info(`Current language is ${settings.getLanguage()}`);
        setLanguage(settings.getLanguage());
    } else {
        logger.info(`No language is set, use browser default ${getDefaultLanguage()}`);
        setLanguage(getDefaultLanguage());
    }

    if (settings.getTimezone()) {
        logger.info(`Current timezone is ${settings.getTimezone()}`);
        setTimezone(settings.getTimezone());
    } else {
        logger.info(`No timezone is set, use browser default ${utils.getTimezoneOffset()} (maybe ${moment.tz.guess(true)})`);
    }
}

app.component('ItemIcon', ItemIcon);
app.component('PieChart', PieChart);
app.component('PasswordInputSheet', PasswordInputSheet);
app.component('PasscodeInputSheet', PasscodeInputSheet);
app.component('PinCodeInputSheet', PinCodeInputSheet);
app.component('DateRangeSelectionSheet', DateRangeSelectionSheet);
app.component('ListItemSelectionSheet', ListItemSelectionSheet);
app.component('TwoColumnListItemSelectionSheet', TwoColumnListItemSelectionSheet);
app.component('TreeViewSelectionSheet', TreeViewSelectionSheet);
app.component('IconSelectionSheet', IconSelectionSheet);
app.component('ColorSelectionSheet', ColorSelectionSheet);
app.component('InformationSheet', InformationSheet);
app.component('NumberPadSheet', NumberPadSheet);
app.component('TransactionTagSelectionSheet', TransactionTagSelectionSheet);

app.directive('TextareaAutoSize', TextareaAutoSize);

app.config.globalProperties.$version = version.getVersion();
app.config.globalProperties.$buildTime = version.getBuildTime();

app.config.globalProperties.$licenses = {
    license: licenses.getLicense(),
    thirdPartyLicenses: licenses.getThirdPartyLicenses()
};

app.config.globalProperties.$constants = {
    api: api,
    datetime: datetime,
    currency: currency,
    colors: colors,
    icons: icons,
    account: account,
    transaction: transaction,
    category: category,
    statistics: statistics,
};

app.config.globalProperties.$utilities = utils;
app.config.globalProperties.$logger = logger;
app.config.globalProperties.$webauthn = webauthn;
app.config.globalProperties.$settings = settings;
app.config.globalProperties.$locale = {
    getDefaultLanguage: getDefaultLanguage,
    getAllLanguageInfos: getAllLanguageInfos,
    getLanguageInfo: getLanguageInfo,
    getAllLongMonthNames: () => getAllLongMonthNames(i18n.global.t),
    getAllShortMonthNames: () => getAllShortMonthNames(i18n.global.t),
    getAllLongWeekdayNames: () => getAllLongWeekdayNames(i18n.global.t),
    getAllShortWeekdayNames: () => getAllShortWeekdayNames(i18n.global.t),
    getAllMinWeekdayNames: () => getAllMinWeekdayNames(i18n.global.t),
    getInputTimeIntlDateTimeFormatOptions: () => getInputTimeIntlDateTimeFormatOptions(i18n.global.t),
    setLanguage: setLanguage,
    getTimezone: settings.getTimezone,
    setTimezone: setTimezone,
    getAllTimezones: (includeSystemDefault) => getAllTimezones(includeSystemDefault, i18n.global.t),
    getAllCurrencies: () => getAllCurrencies(i18n.global.t),
    getDisplayCurrency: (value, currencyCode, notConvertValue) => getDisplayCurrency(value, currencyCode, notConvertValue, i18n.global.t),
    initLocale: initLocale
};
app.config.globalProperties.$tIf = (text, isTranslate) => transateIf(text, isTranslate, i18n.global.t);

app.config.globalProperties.$alert = (message, confirmCallback) => showAlert(message, confirmCallback, i18n.global.t);
app.config.globalProperties.$confirm = (message, confirmCallback, cancelCallback) => showConfirm(message, confirmCallback, cancelCallback, i18n.global.t);
app.config.globalProperties.$toast = (message, timeout) => showToast(message, timeout, i18n.global.t);
app.config.globalProperties.$showLoading = showLoading;
app.config.globalProperties.$hideLoading = hideLoading;
app.config.globalProperties.$routeBackOnError = routeBackOnError;
app.config.globalProperties.$ui = {
    isModalShowing: isModalShowing,
    onSwipeoutDeleted: onSwipeoutDeleted
};

app.config.globalProperties.$user = userstate;

app.config.globalProperties.$locale.initLocale();

app.mount('#app');
