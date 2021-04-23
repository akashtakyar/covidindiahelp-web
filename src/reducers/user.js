let initialState = {
    isLoggedIn: false,
    loginFailure: null,
    deviceId: null,
    sessionToken: null,
    loading: false,
    isForgotPasswordSuccess: false
};
export default function user(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}