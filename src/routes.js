import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";
import {Coloumn} from "./modules";
import {history} from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import Main from './modules/mainComponent';
import AddInfo from './modules/add-info/index';

import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/messaging";
import Utility, {dispatchAction} from "./utility";
import {eventConstants} from "./constants";
import {NotificationService} from "./services";

class Routes extends BaseComponent {

    async componentDidMount() {
        this.registerForPush().catch(error => console.log(error));

    }

    async registerForPush() {
        var firebaseConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID,
            measurementId: process.env.REACT_APP_MEASUREMENT_ID
        };
        console.log("firebaseConfig===", firebaseConfig);
        try {
            firebase.initializeApp(firebaseConfig);
            const messaging = firebase.messaging();
            messaging.usePublicVapidKey(process.env.REACT_APP_FIREBASE_WEB_PUSH_PUBLIC_KEY);

            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    messaging.getToken().then((currentToken) => {
                        if (currentToken) {
                            this.registerDevice(currentToken).catch((error) => console.log("Device Registration Error! ", error));
                        } else {
                            console.log('No Instance ID token available. Request permission to generate one.');
                            // this.registerDevice().catch((error) => console.log("Device Registration Error! ", error));
                        }
                    }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                    });
                } else {
                    console.log('Unable to get permission to notify.');
                    // this.registerDevice().catch((error) => console.log("Device Registration Error! ", error));
                }
            })
        } catch (e) {
            console.log("error handling in try catch", e);
            this.registerDevice().catch((error) => console.log("Device Registration Error! ", error));
        }

    }

    async registerDevice(token) {
        console.log("token====",token)
        if (Utility.isEmpty(this.props.user.deviceId)) {
            let requestData = {};
            requestData['deviceType'] = "web";
            requestData['pushToken'] = token ? token : '';
            let [error, deviceResponse] = await Utility.parseResponse(NotificationService.registerDevice(requestData));
            this.props.dispatchAction(error ? eventConstants.REGISTER_DEVICE_FAILURE : eventConstants.REGISTER_DEVICE_SUCCESS,
                deviceResponse ? deviceResponse.deviceId : null);
        }
    }

    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Main}/>
                        <Route exact path="/about" component={AddInfo}/>

                        <Redirect exact from='*' to="/"/>

                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps, {dispatchAction})(Routes);