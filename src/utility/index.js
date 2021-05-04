import "react-s-alert/dist/s-alert-default.css";
import {history} from "../managers/history";
import swal from "sweetalert";
import React from "react";
import ToastService from 'react-material-toast';
import {voteTypeConstants} from "../constants";

const toast = ToastService.new({
    place: 'topRight',
    duration: 1,
    maxCount: 2
});
let moment = require('moment');
const utility = {
    getHeader,
    apiFailureToast,
    apiSuccessToast,
    getAddedByObject,
    getCompanyObject,
    generateGUID,
    basicAlert,
    getActivityDateEpochRange,
    getMiniAwardNominationModel,
    getAddress,
    decodeBase64,
    validationAlert,
    isNumber,
    trackEvent,
    navigateToPath,
    toggleDropDown,
    validateName,
    validateEmail,
    isEmpty,
    isMenuActive,
    isPasswordValid,
    showUnderDevelopment,
    epochToDate,
    getDateAfterOneYear,
    generateCompanyLogoKey,
    dateCompare,
    isCompanyBalanceLow,
    getMiniUserModel,
    getMiniRecognitionUserModel,
    getTimeFromNow,
    epocToPrettyTime,
    epocToPrettyTimeForFuture,
    getTopSenderAggregatedQuery,
    getTimeDifference,
    getYearsList,
    getTimestampFromDate,
    extractDate,
    secondsToTime,
    getDateFormat,
    changeDateFormat,
    toSentenceCase,
    parseResponse,
    getLatestDownVoteComment
};
export default utility;

function getLatestDownVoteComment(list) {
    if (!list || list.length < 1)
        return ''
    list = list.filter(obj => obj.type === voteTypeConstants.DOWN_VOTE).sort((a, b) => a.addedOn > b.addedOn ? 1 : -1)
    return list[list.length - 1]

}

function parseResponse(promise) {
    return promise.then(data => {
        return [null, data];
    }).catch(err => [err]);
};

export const dispatchAction = (type, data) => {
    return dispatch => dispatch({type, data});
};

function trackEvent(event, eventData) {
    // try {
    //     if (!eventData)
    //         mixpanel.track(event);
    //     else
    //         mixpanel.track(event, eventData);
    // } catch (err) {
    //     console.log(err)
    // }
}

function getDateFormat() {
    var my_date = new Date(2019, 0, 31);
    console.log(my_date.toLocaleDateString());
    // Initialize variables
    var separator = "";
    var first = "";
    var second = "";
    var third = "";
    var date_parts = [];

    // get separator : "-", "/" or " ", format based on toLocaleDateString function
    if (my_date.toLocaleDateString().split("-").length == 3) {
        separator = " - ";
        date_parts = my_date.toLocaleDateString().split("-");
    }
    if (my_date.toLocaleDateString().split("/").length == 3) {
        separator = " / ";
        date_parts = my_date.toLocaleDateString().split("/");
    }
    if (my_date.toLocaleDateString().split(" ").length == 3) {
        separator = " ";
        date_parts = my_date.toLocaleDateString().split(" ");
    }

    // get first part
    if (date_parts[0] == 2019) {
        first = "YYYY";
    } else if (date_parts[0] == 31) {
        first = "DD";
    } else {
        if (date_parts[0].length <= 2) {
            first = "MM";
        } else {
            first = "MMM";
        }
    }

    // get second part
    if (date_parts[1] == 2019) {
        second = "YYYY";
    } else if (date_parts[1] == 31) {
        second = "DD";
    } else {
        if (date_parts[1].length <= 2) {
            second = "MM";
        } else {
            second = "MMM";
        }
    }

    // get third part
    if (date_parts[2] == 2019) {
        third = "YYYY";
    } else if (date_parts[2] == 31) {
        third = "DD";
    } else {
        if (date_parts[2].length <= 2) {
            third = "MM";
        } else {
            third = "MMM";
        }
    }
    // assembly
    var format = first + "/" + second + "/" + third;
    return format;
}


function getHeader() {
    // return {
    //     'session-token': sessionManager.getDataFromCookies(genericConstants.COOKIES_KEY.SESSION_TOKEN),
    //     'device-id': sessionManager.getDataFromCookies(genericConstants.COOKIES_KEY.DEVICE_ID),
    //     'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON
    // };
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//TODO: update apiConstant.API_FAILURE
function apiFailureToast(message) {
    toast.error(message ? message : "apiConstant.API_FAILURE");
}

function apiSuccessToast(msg) {
    toast.success(msg ? msg : "apiConstant.API_SUCCESS");
}

function generateGUID() {
    var nav = window.navigator;
    var screen = window.screen;
    var guid = nav.mimeTypes.length;
    guid += nav.userAgent.replace(/\D+/g, '');
    guid += nav.plugins.length;
    guid += screen.height || '';
    guid += screen.width || '';
    guid += screen.pixelDepth || '';
    return guid;
}

function basicAlert(message) {
    swal({
        title: message,
        icon: '/images/alert.svg',
    })
}

function validationAlert(message, type = 'info') {
    swal({
        title: message,
        icon: type
    })
}

function getTimeDifference(timeStampTo) {
    let minFive = 300000;
    let oneDay = 86400000;
    let difference = "";
    let am = " AM";
    let pm = " PM";
    let hh = epochToDate(timeStampTo, 'hh');
    let mm = epochToDate(timeStampTo, 'mm');
    let dateFormat = epochToDate(timeStampTo, 'DD MMM YYYY');
    let hours = new Date(timeStampTo).getHours();
    let timeDifference = new Date().getTime() - timeStampTo;
    if (timeDifference < oneDay) {
        if (timeDifference < minFive) {
            difference = "Just Now";
        } else {
            if (hours < 12)
                difference = "Today at " + hh + ":" + mm + am;
            else
                difference = "Today at " + hh + ":" + mm + pm;
        }
    } else {
        if (hours < 12)
            difference = dateFormat + ", " + hh + ':' + mm + am;
        else
            difference = dateFormat + ", " + hh + ':' + mm + pm;
    }
    return difference;
}

function epochToDate(timeStamp, timeFormat) {
    timeStamp = Math.floor(timeStamp);  //to convert to integer if seconds is String.
    let dateObject = new Date(timeStamp);
    return moment(dateObject).format(timeFormat)//DD MMM YYYY
}


function getTimeFromNow(timeStamp) {
    return moment(timeStamp, "YYYYMMDD").fromNow();
}

function dateCompare(timeStampFrom, timeStampTo) {
    let diffTime = (timeStampFrom * 1000 - timeStampTo);
    let diffDays = (diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getDateAfterOneYear(timeStamp) {
    timeStamp = Math.floor(timeStamp);  //to convert to integer if seconds is String.
    let dateObject = new Date(timeStamp);
    return moment(dateObject).add(1, 'years').valueOf();
}

function getActivityDateEpochRange(activityDate) {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let startDayEpochOfCurrentWeek = moment().startOf('isoweek').unix() * 1000;
    let startDayEpochOfCurrentMonth = moment().startOf('month').unix() * 1000;
    let startDayEpochOfCurrentQuarter = moment().startOf('quarter').unix() * 1000;
    let startDayEpochOfCurrentYear = moment().startOf('year').unix() * 1000;
    let endDayEpochOfCurrentWeek = moment().endOf('isoweek').unix() * 1000;
    let endDayEpochOfCurrentMonth = moment().endOf('month').unix() * 1000;
    let endDayEpochOfCurrentQuarter = moment().endOf('quarter').unix() * 1000;
    let endDayEpochOfCurrentYear = moment().endOf('year').unix() * 1000;
    let day, start;
    switch (activityDate) {
        case "Today":
            return {start: currentDate.getTime(), end: new Date().getTime()};
        case "Yesterday":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 1);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last seven days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 7);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last fourteen days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 14);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last twenty one days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 21);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last Week":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 7);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last two weeks":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 14);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last three weeks":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 21);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last Month":
            start = new Date(startDayEpochOfCurrentMonth);
            start.setMonth(start.getMonth() - 1);
            return {start: start.getTime(), end: startDayEpochOfCurrentMonth};
        case "Last Quarter":
            start = new Date(startDayEpochOfCurrentQuarter);
            start.setMonth(start.getMonth() - 3);
            return {start: start.getTime(), end: startDayEpochOfCurrentQuarter};
        case "Last Year":
            console.log(startDayEpochOfCurrentYear)
            start = new Date(startDayEpochOfCurrentYear);
            start.setFullYear(start.getFullYear() - 1);
            return {start: start.getTime(), end: startDayEpochOfCurrentYear};
        case "This Week":
            return {start: startDayEpochOfCurrentWeek, end: endDayEpochOfCurrentWeek};
        case "This Quarter":
            return {start: startDayEpochOfCurrentQuarter, end: endDayEpochOfCurrentQuarter};
        case "This Year":
            return {start: startDayEpochOfCurrentYear, end: endDayEpochOfCurrentYear};
        case "Current Month":
            return {start: startDayEpochOfCurrentMonth, end: endDayEpochOfCurrentMonth};
        default:
            return {start: currentDate.getTime(), end: new Date().getTime()};
    }

}

function getAddress(addressObj) {
    if (!addressObj || !Object.keys(addressObj).length || !(addressObj.addressLine1 || addressObj.poBoxNumber))
        return "";
    return (
        <span>
            {addressObj.addressLine1 ? addressObj.addressLine1 : `PO Box ${addressObj.poBoxNumber}`}<br/>
            {addressObj.addressLine2 ? <span>{addressObj.addressLine2}<br/></span> : ''}
            {addressObj.city}, {addressObj.state} {addressObj.zipCode}<br/>
            {addressObj.country}
        </span>
    )
}

function decodeBase64(s) {
    let e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = s.length;
    let A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0; i < 64; i++) {
        e[A.charAt(i)] = i;
    }
    for (x = 0; x < L; x++) {
        c = e[s.charAt(x)];
        b = (b << 6) + c;
        l += 6;
        while (l >= 8) {
            ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
        }
    }
    return r;
}

function navigateToPath(path) {
    history.push(path)
}

function toggleDropDown(dropdownID) {
    // $("#" + dropdownID).toggle("show");
}

function validateName(name) {
    let reg = /[A-Z][a-zA-Z]*/;
    return reg.test(name)
}

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function isPasswordValid(password) {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return reg.test(password);
}

function isEmpty(string) {
    return !string || string.trim().length === 0;
}

function isMenuActive(path) {
    return window.location.pathname.includes(path);
}

function getAddedByObject(propsOfComponent) {
    if (!propsOfComponent || !propsOfComponent.user || !propsOfComponent.user.userDetails)
        return null;
    let user = propsOfComponent.user.userDetails;
    return {
        privateKey: user.privateKey,
        publicKey: user.publicKey,
        email: user.email,
        wercPlaceID: user.wercPlaceID,
        photo: user.photo ? user.photo : '',
        designation: user.designation ? user.designation : {},
        department: user.department ? user.department : {},
        name: (user.firstName || user.lastName) ? (user.firstName + " " + user.lastName) : (user.company && user.company.name ? user.company.name : ""),
        _id: user._id
    };
}

function getMiniUserModel(user) {
    if (!user)
        return null;
    return {
        privateKey: user.privateKey,
        publicKey: user.publicKey,
        photo: user.photo ? user.photo : '',
        email: user.email,
        wercPlaceID: user.wercPlaceID,
        designation: user.designation ? user.designation : {},
        department: user.department ? user.department : {},
        name: (user.firstName || user.lastName) ? (user.firstName + " " + user.lastName) : user.company.name,
        _id: user._id
    };
}

function getMiniRecognitionUserModel(recognizeUser) {
    if (!recognizeUser)
        return null;
    return {
        name: recognizeUser.name,
        clapWeight: recognizeUser.clapWeight,
        _id: recognizeUser._id
    };
}


function getMiniAwardNominationModel(nomination) {
    if (!nomination)
        return null;
    return {
        name: nomination.name,
        photo: nomination.photo,
        _id: nomination._id
    };
}


function generateRandomAlphaNumericString(length) {
    var randomAlphaNumericString = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++)
        randomAlphaNumericString += charset.charAt(Math.floor(Math.random() * charset.length));
    return randomAlphaNumericString;
}

function generateCompanyLogoKey() {
    var currentTimeStamp = (new Date().getTime()).toString();
    return currentTimeStamp + "_" + generateRandomAlphaNumericString(13);
}

function showUnderDevelopment() {
    basicAlert("Under Development")
}

function getCompanyObject(propsOfComponent) {
    if (!propsOfComponent || !propsOfComponent.user || !propsOfComponent.user.userDetails || !propsOfComponent.user.userDetails.company)
        return null;
    return propsOfComponent.user.userDetails.company;
}

function isCompanyBalanceLow(company) {
    if (!company || !company.tokenEconomy || !company.tokenEconomy) {
        console.log('return false')
        return false;
    }
    let remainingMonth = (new Date(company.tokenEconomy.endDate)).getMonth() - (new Date()).getMonth() +
        (12 * ((new Date(company.tokenEconomy.endDate)).getFullYear() - (new Date()).getFullYear()));
    if (company.tokenEconomy.PERCBalance < (company.tokenEconomy.monthlyPERCAllocation * remainingMonth))
        return true;
    return false;
}

function getYearsList(addedOn = new Date().getTime()) {
    let durationList = [];
    for (let i = new Date(addedOn).getFullYear(); i <= new Date().getFullYear(); i++) {
        durationList.push(i)
    }
    return durationList;
}

function epocToPrettyTime(seconds) {
    seconds = Math.floor(seconds);//to convert to integer if seconds is String.
    var nowTimeMilliseconds = (new Date).getTime();
    var date = new Date(seconds);
    var dateObject = moment(date).format('DD MMMM YYYY');
    //var dateObject = moment(date).format('ddd, MMM DD hh:mm A');
    seconds = Math.floor((nowTimeMilliseconds / 1000) - (seconds / 1000));
    var interval = Math.floor(seconds / 172800);
    if (interval >= 1)
        return dateObject;
    //if (interval >= 1) return dateObject+" "+moment.tz(moment.tz.guess()).format('z');
    interval = Math.floor(seconds / 86400);
    if (interval >= 1)
        return "yesterday";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        if (interval === 1)
            return interval + " hr ago";
        return interval + " hrs ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        if (interval === 1)
            return interval + " minute ago";
        return interval + " minutes ago";
    } else
        return "Just now";
}

function epocToPrettyTimeForFuture(seconds) {
    seconds = Math.floor(seconds);//to convert to integer if seconds is String.
    var nowTimeMilliseconds = (new Date).getTime();
    var date = new Date(seconds);
    var dateObject = moment(date).format('DD MMMM YYYY');
    //var dateObject = moment(date).format('ddd, MMM DD hh:mm A');
    seconds = Math.floor((seconds / 1000) - (nowTimeMilliseconds / 1000));
    var interval = Math.floor(seconds / 86400);
    if (interval >= 1)
        return interval + ' days';

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        if (interval == 1)
            return interval + " hr";
        return interval + " hrs";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        if (interval == 1)
            return interval + " minute";
        return interval + " minutes";
    } else
        return "0 minute";
}


function getTopSenderAggregatedQuery(propsOfComponent, skip = 0, limit = 0, matchObj = {}) {
    if (!propsOfComponent || !propsOfComponent.user || !propsOfComponent.user.userDetails || !propsOfComponent.user.userDetails.company)
        return null;
    let queryObj = [];

    //Match Object for the conditions-
    let feedType = [];
    feedType.push({'entityData.feedType': 'ADD_RECOGNITION'});
    feedType.push({'entityData.feedType': 'ADD_NOMINATION'});
    matchObj['$or'] = feedType;
    matchObj['entityData.company.id'] = propsOfComponent.user.userDetails.company.id;

    //Group object for grouping-
    let groupObj = {};
    groupObj._id = "$entityData.addedBy.email";
    groupObj.PERCBalance = {"$sum": "$entityData.PERCValue"};
    groupObj.firstName = {"$first": "$entityData.addedBy.name"};

    //Group object for grouping-
    let sortObj = {};
    sortObj._id = "$recipient.userDetails.email";

    queryObj.push({"$match": matchObj});
    queryObj.push({"$group": groupObj});

    // queryObj.push({"$sort": {'PERCBalance':-1}});

    queryObj.push({"$limit": limit});
    queryObj.push({"$skip": skip});
    queryObj.push({"$sort": {'PERCBalance': -1}});

    return queryObj;
}

function secondsToTime(milliseconds) {
    let date = new Date(milliseconds)
    var duration = moment.duration(milliseconds, 'milliseconds');
    return (duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
    return moment(date, 'hh:mm:ss').fromNow()
}

function getTimestampFromDate(year, month, date = 0) {
    let days = new Date(year, month, date).getDate();
    return new Date(year + "/" + month + "/" + days).getTime();

}

function extractDate(date, getType) {
    console.log("date", typeof date, "getType", getType);
    switch (getType) {
        case "DAY":
            return new Date(date.toString()).getDate();
            break;
        case "MONTH":
            return new Date(date.toString()).getMonth() + 1;
            break;
        case "YEAR":
            return new Date(date.toString()).getFullYear();
            break;
        default :
            return date;
    }

}


function changeDateFormat(date, newFormat) {
    let currentFormat = getDateFormat()
    return moment(date, currentFormat).format(newFormat)
}

function toSentenceCase(stringToChange) {
    return stringToChange.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase()
    });
}
