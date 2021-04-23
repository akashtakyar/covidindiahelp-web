import React from "react";
import BaseComponent from '../baseComponent'
import SignUpComponent from './signUpComponent'
import Utils from "../../utility";

class Register extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            confirmPassword: "",
            confirmPasswordError: ""
        }
    }

    componentDidMount() {

    }

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    togglePassword = (event) => {
        this.setState({isPasswordVisible: !this.state.isPasswordVisible});
    };


    validateLoginForm = () => {
        this.setState({
            nameError: Utils.isEmpty(this.state.name) ? "Please enter name" : (Utils.validateName(this.state.name) ? "" : "Invalid name"),
            emailError: Utils.validateEmail(this.state.email) ? "" : "Invalid email address",
            passwordError: Utils.isPasswordValid(this.state.password) ? "" : "Password should contain 1 special character",
            confirmPasswordError: Utils.isPasswordValid(this.state.confirmPassword) ?
                (this.state.password === this.state.confirmPassword ? "" : "Passwords do not match") : "Password should contain 1 special character"
        });
        return Utils.validateName(this.state.name) && Utils.validateEmail(this.state.email) && Utils.isPasswordValid(this.state.password)
            && Utils.isPasswordValid(this.state.confirmPassword) && this.state.password === this.state.confirmPassword;
    };

    onLoginClicked = (event) => {
        event.preventDefault();
        if (this.validateLoginForm())
            Utils.basicAlert("Badhiyaaaa")
    };

    render() {
        return (
            <SignUpComponent state={this.state}
                             onChangeEvent={this.onChangeEvent}
                             togglePassword={this.togglePassword}
                             onLoginClicked={this.onLoginClicked}/>
        );
    }
}

export default Register;