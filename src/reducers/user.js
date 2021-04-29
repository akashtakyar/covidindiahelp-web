import {cookiesConstants, eventConstants} from "../constants";
import {sessionManager} from "../managers/sessionManager";

let deviceId = sessionManager.getDataFromCookies(cookiesConstants.DEVICE_ID) || null;

let initialState = {
    isLoggedIn: false,
    loginFailure: null,
    deviceId: deviceId,
    sessionToken: null,
    loading: false,
    isForgotPasswordSuccess: false
};
export default function user(state = initialState, action) {
    switch (action.type) {

        case eventConstants.REGISTER_DEVICE_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.DEVICE_ID);
            return {
                ...state,
                deviceId: action.data
            };
        case eventConstants.REGISTER_DEVICE_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
}