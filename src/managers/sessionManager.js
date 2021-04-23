/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const sessionManager = {
    setDataInCookies,
    getDataFromCookies,
    removeDataFromCookies,
};

function setDataInCookies(data, key) {
    cookies.set(key, JSON.stringify(data), {path: '/'});
}

function getDataFromCookies(key) {
    return cookies.get(key)
}

function removeDataFromCookies(key) {
    cookies.remove(key, {path: '/'});
}