import {httpService} from "../managers/httpService";

const {httpConstants} = require("../constants");

export default {
    registerDevice,
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true}
}
async function registerDevice(requestData) {
    // let url = process.env.REACT_APP_NOTIFICATION_SERVICE_URL + httpConstants.API_END_POINT.REGISTER_DEVICE;
    let url = 'http://localhost:3003' + httpConstants.API_END_POINT.REGISTER_DEVICE;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};