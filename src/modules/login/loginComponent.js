import React from 'react'
import {Column, Row} from "simple-flexbox";
import {Button} from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import {history} from "../../managers/history";


function LoginForm(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    return (
        <Column className="w-450 pt-5 align-items-center " horizontal={'center'}>
            <form onSubmit={onLoginClicked} className="w-100">
                <Row className="justify-content-center w-100 fs-28 fc-dark-slate-blue">
                    Sign in to your account
                </Row>

                <div className="fc-dark-slate-blue fs-15 mt-5">Email Address</div>
                <CustomInput id="email" type="text" value={state ? state.email : ""} onChange={onChangeEvent}
                             error={state ? state.emailError : ""} className="fs-15 p-2 mt-1"/>

                <Row className="fs-15 mt-4 justify-content-between">
                    <div className="fc-dark-slate-blue">Password</div>
                    <div className="fc-blue cursor-pointer" onClick={togglePassword}>
                        {state && state.isPasswordVisible ? "Hide Password" : "Show Password"}
                    </div>
                </Row>
                <CustomInput id="password" type={state && state.isPasswordVisible ? "text" : "password"}
                             value={state ? state.password : ""} onChange={onChangeEvent}
                             error={state ? state.passwordError : ""} className="fs-15 p-2 mt-1"/>

                <Row vertical={'center'} className="my-3">
                    <input style={{width: '15px'}} id="isRememberMeSelected" type="checkbox"
                           className="checkbox-border p-3"/>
                    <Column className="ml-2 fs-15 fc-blue-grey font-weight-normal">Remember me</Column>
                </Row>

                <Button type='submit' className="bg-blue outline-none text-transform-capitalize
                fc-white w-100 py-2 fs-17 my-3 cursor-pointer">
                    Log in
                </Button>
                <Row className="w-100 justify-content-center">Not able to login?
                    <a className="fc-blue">Recover Password</a>
                </Row>
            </form>
        </Column>
    );
}

function HeaderComponent(props) {
    return (
        <Row vertical="center" className="justify-content-between">
            <img src="/images/limb_logo.svg" alt='limb' className="w-150"/>
            <Row vertical="center">
                <Column vertical="center" className="fc-brownish-grey fs-15 px-2 py-1">New user?</Column>
                <Column vertical="center" className="fc-blue br-4 b-1-blue fs-17 px-2 py-1 cursor-pointer"
                        onClick={() => history.replace("/sign-up")}>
                    Sign Up
                </Column>
            </Row>
        </Row>
    )
}

function loginComponent(props) {
    return (
        <Column horizontal={'center'} className="w-100 p-3 min-vh-100 h-100 justify-content-between">
            <Column className="w-100">
                {HeaderComponent(props)}
                <Row horizontal="center" className="w-100 my-5">
                    {LoginForm(props)}
                </Row>
            </Column>
            <Column className="jc-center w-100 align-items-center fs-14 my-3">
                <div className="fc-warm-grey">©2019 LIMB CRE. All Rights Reserved.</div>
                <div className="fc-blue">Privacy Policy</div>
            </Column>
        </Column>
    );
}

export default loginComponent;