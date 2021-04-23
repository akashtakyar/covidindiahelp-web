import React from 'react'
import {Column, Row} from "simple-flexbox";
import {Button} from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import {history} from "../../managers/history";
import Divider from "@material-ui/core/Divider/Divider";


function SubscriptionTypeComponent(props) {
    return (
        <div
            className="p-3 cursor-pointer fc-dark-slate-blue text-center m-3 w-250 bg-white b-1-white subscription-plan-card-shadow z-index-100 br-4">
            <div className="fs-20 font-weight-bold">Loan Seller</div>
            <div className="fs-15 my-3">Create, transfer, sell and
                publish Loan Data Records
                on Blockchain
            </div>
            <img/>
            <Button className="my-3 bg-blue px-2 fc-white fs-17 outline-none text-transform-capitalize">
                Buy this plan
            </Button>
        </div>
    );
}

function SubscriptionPlanComponent(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    return (
        <Column className="align-items-center my-5" horizontal={'center'}>
            <div className="w-100 fs-28 text-center fc-dark-slate-blue">
                LIMB CRE Plans for your Business
            </div>
            <div className="w-100 fs-20 text-center fc-dusky-blue">
                Select a plan to match your company type
            </div>
            <Row className="mt-4">
                {SubscriptionTypeComponent(props)}
                {SubscriptionTypeComponent(props)}
                {SubscriptionTypeComponent(props)}
                {SubscriptionTypeComponent(props)}
            </Row>
        </Column>
    );
}

function SignUpForm(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    return (
        <Column className="w-450 pl-5 ml-3 border-left py-3 my-3 align-items-center fc-dark-slate-blue"
                horizontal={'center'}>
            <form onSubmit={onLoginClicked} className="w-100">

                <label className="text-left w-100 fs-20"><span
                    className='font-weight-bold'>Create your account</span> (all field required)</label>

                <div className="fs-15 mt-3 font-weight-bold">Full Name</div>
                <CustomInput id="name" type="text" value={state ? state.name : ""} onChange={onChangeEvent}
                             error={state ? state.nameError : ""} className="fs-15 p-2 mt-1"/>

                <div className="fs-15 mt-2 font-weight-bold ">Email Address</div>
                <CustomInput id="email" type="text" value={state ? state.email : ""} onChange={onChangeEvent}
                             error={state ? state.emailError : ""} className="fs-15 p-2 mt-1"/>

                <Row className="fs-15 mt-2 font-weight-bold">Password</Row>
                <CustomInput id="password" type={"password"} value={state ? state.password : ""}
                             onChange={onChangeEvent} error={state ? state.passwordError : ""}
                             className="fs-15 p-2 mt-1"/>

                <Row className="fs-15 mt-2 font-weight-bold">Confirm Password</Row>
                <CustomInput id="confirmPassword" type={"password"} value={state ? state.confirmPassword : ""}
                             onChange={onChangeEvent} error={state ? state.confirmPasswordError : ""}
                             className="fs-15 p-2 mt-1"/>

                <Button type='submit' className="bg-blue outline-none text-transform-capitalize
                fc-white w-100 py-2 fs-17 mt-4 cursor-pointer">
                    Continue
                </Button>
                <div className="w-100 text-left fs-15 my-1">By clicking on continue, you agree to the LIMB CRE
                    <a className="fc-blue"> Terms of Service </a>
                    and <a className="fc-blue">Privacy Policy.</a>
                </div>
            </form>
        </Column>
    );
}

function SelectedSubscriptionComponent(props) {
    return (
        <div
            className="p-3 mx-3 cursor-pointer fc-dark-slate-blue text-center m-3 w-250 bg-white">
            <div className="fs-20 font-weight-bold">Loan Seller</div>
            <div className="fs-15 my-3">Create, transfer, sell and
                publish Loan Data Records
                on Blockchain
            </div>
            <img/>
            <Button className="my-3 bg-blue px-2 fc-white fs-17 outline-none text-transform-capitalize">
                Buy this plan
            </Button>
        </div>
    );
}

function SignUpComponent(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    return (
        <Row className="align-items-center my-5" horizontal={'center'}>
            {SelectedSubscriptionComponent(props)}
            {SignUpForm(props)}
        </Row>
    );
}

function HeaderComponent(props) {
    return (
        <Row vertical="center" className="justify-content-between w-100">
            <img src="/images/limb_logo.svg" alt='limb' className="w-150"/>
            <Row vertical="center">
                <Column vertical="center" className="fc-brownish-grey fs-15 px-2 py-1">Existing user?</Column>
                <Column vertical="center" className="fc-blue br-4 b-1-blue fs-17 px-2 py-1 cursor-pointer"
                        onClick={() => history.replace("/")}>

                    Log in</Column>
            </Row>
        </Row>
    )
}

function signUpComponent(props) {
    return (
        <Column horizontal={'center'} className="w-100 p-3 min-vh-100">
            {HeaderComponent(props)}
            {/*{SubscriptionPlanComponent(props)}*/}
            {SignUpComponent(props)}
        </Column>
    );
}

export default signUpComponent;