import axios from 'axios';
import userState from "./userstate.js";

axios.defaults.baseURL = '/api';
axios.interceptors.request.use(config => {
    const token = userState.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.data && error.response.data.errorCode) {
        const errorCode = error.response.data.errorCode;

        if (202001 <= errorCode && errorCode <= 202007) { // unauthorized access or token is invalid
            userState.clearToken();
            location.reload();
            return Promise.reject({ processed: true });
        }
    }

    return Promise.reject(error);
});

export default {
    setLocale: locale => {
        axios.defaults.headers.common['Accept-Language'] = locale;
    },
    authorize: ({ loginName, password }) => {
        return axios.post('authorize.json', {
            loginName,
            password
        });
    },
    authorize2FA: ({ passcode, token }) => {
        return axios.post('2fa/authorize.json', {
            passcode
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    logout: () => {
        return axios.get('v1/logout.json');
    }
};
