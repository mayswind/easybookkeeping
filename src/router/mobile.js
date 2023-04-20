import userState from '../lib/userstate.js';

import HomePage from '../views/mobile/Home.vue';
import LoginPage from '../views/mobile/Login.vue';
import SignUpPage from '../views/mobile/Signup.vue';
import UnlockPage from '../views/mobile/Unlock.vue';

import TransactionListPage from '../views/mobile/transactions/List.vue';
import TransactionEditPage from '../views/mobile/transactions/Edit.vue';

import AccountListPage from '../views/mobile/accounts/List.vue';
import AccountEditPage from '../views/mobile/accounts/Edit.vue';

import StatisticsTransactionPage from '../views/mobile/statistics/Transaction.vue';
import StatisticsSettingsPage from '../views/mobile/statistics/Settings.vue';
import StatisticsAccountFilterSettingsPage from '../views/mobile/statistics/AccountFilterSettings.vue';
import StatisticsCategoryFilterSettingsPage from '../views/mobile/statistics/CategoryFilterSettings.vue';

import SettingsPage from '../views/mobile/Settings.vue';
import ApplicationLockPage from '../views/mobile/ApplicationLock.vue';
import ExchangeRatesPage from '../views/mobile/ExchangeRates.vue';
import AboutPage from '../views/mobile/About.vue';

import UserProfilePage from '../views/mobile/users/UserProfile.vue';
import DataManagementPage from '../views/mobile/users/DataManagement.vue';
import TwoFactorAuthPage from '../views/mobile/users/TwoFactorAuth.vue';
import SessionListPage from '../views/mobile/users/SessionList.vue';

import CategoryAllPage from '../views/mobile/categories/All.vue';
import CategoryListPage from '../views/mobile/categories/List.vue';
import CategoryEditPage from '../views/mobile/categories/Edit.vue';
import CategoryPresetPage from '../views/mobile/categories/Preset.vue';

import TagListPage from '../views/mobile/tags/List.vue';

function checkLogin({ router, resolve, reject }) {
    if (!userState.isUserLogined()) {
        reject();
        router.navigate('/login', {
            clearPreviousHistory: true,
            browserHistory: false
        });
        return;
    }

    if (!userState.isUserUnlocked()) {
        reject();
        router.navigate('/unlock', {
            clearPreviousHistory: true,
            browserHistory: false
        });
        return;
    }

    resolve();
}

function checkLocked({ router, resolve, reject }) {
    if (!userState.isUserLogined()) {
        reject();
        router.navigate('/login', {
            clearPreviousHistory: true,
            browserHistory: false
        });
        return;
    }

    if (userState.isUserUnlocked()) {
        reject();
        router.navigate('/', {
            clearPreviousHistory: true,
            browserHistory: false
        });
        return;
    }

    resolve();
}

function checkNotLogin({ router, resolve, reject }) {
    if (userState.isUserLogined() && !userState.isUserUnlocked()) {
        reject();
        router.navigate('/unlock', {
            clearPreviousHistory: true,
            pushState: false
        });
        return;
    }

    if (userState.isUserLogined()) {
        reject();
        router.navigate('/', {
            clearPreviousHistory: true,
            pushState: false
        });
        return;
    }

    resolve();
}

const routes = [
    {
        path: '/',
        component: HomePage,
        beforeEnter: checkLogin,
        options: {
            animate: false,
        }
    },
    {
        path: '/login',
        component: LoginPage,
        beforeEnter: checkNotLogin,
        options: {
            animate: false,
        }
    },
    {
        path: '/signup',
        component: SignUpPage,
        beforeEnter: checkNotLogin,
        options: {
            animate: false,
        }
    },
    {
        path: '/unlock',
        component: UnlockPage,
        beforeEnter: checkLocked,
        options: {
            animate: false,
        }
    },
    {
        path: '/transaction/list',
        component: TransactionListPage,
        beforeEnter: checkLogin
    },
    {
        path: '/transaction/add',
        component: TransactionEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/transaction/edit',
        component: TransactionEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/transaction/detail',
        component: TransactionEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/account/list',
        component: AccountListPage,
        beforeEnter: checkLogin
    },
    {
        path: '/account/add',
        component: AccountEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/account/edit',
        component: AccountEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/statistic/transaction',
        component: StatisticsTransactionPage,
        beforeEnter: checkLogin
    },
    {
        path: '/statistic/settings',
        component: StatisticsSettingsPage,
        beforeEnter: checkLogin
    },
    {
        path: '/statistic/filter/account',
        component: StatisticsAccountFilterSettingsPage,
        beforeEnter: checkLogin
    },
    {
        path: '/statistic/filter/category',
        component: StatisticsCategoryFilterSettingsPage,
        beforeEnter: checkLogin
    },
    {
        path: '/settings',
        component: SettingsPage,
        beforeEnter: checkLogin
    },
    {
        path: '/app_lock',
        component: ApplicationLockPage,
        beforeEnter: checkLogin
    },
    {
        path: '/exchange_rates',
        component: ExchangeRatesPage,
        beforeEnter: checkLogin
    },
    {
        path: '/about',
        component: AboutPage,
        beforeEnter: checkLogin
    },
    {
        path: '/user/profile',
        component: UserProfilePage,
        beforeEnter: checkLogin
    },
    {
        path: '/user/data/management',
        component: DataManagementPage,
        beforeEnter: checkLogin
    },
    {
        path: '/user/2fa',
        component: TwoFactorAuthPage,
        beforeEnter: checkLogin
    },
    {
        path: '/user/sessions',
        component: SessionListPage,
        beforeEnter: checkLogin
    },
    {
        path: '/category/all',
        component: CategoryAllPage,
        beforeEnter: checkLogin
    },
    {
        path: '/category/list',
        component: CategoryListPage,
        beforeEnter: checkLogin
    },
    {
        path: '/category/add',
        component: CategoryEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/category/edit',
        component: CategoryEditPage,
        beforeEnter: checkLogin
    },
    {
        path: '/category/preset',
        component: CategoryPresetPage,
        beforeEnter: checkLogin
    },
    {
        path: '/tag/list',
        component: TagListPage,
        beforeEnter: checkLogin
    },
    {
        path: '(.*)',
        redirect: '/'
    }
];

export default routes;
