import React from "react";
import BaseComponent from '../baseComponent'
import LoginComponent from './loginComponent'
import Utils from "../../utility";

class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            isPasswordVisible: false,
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
            emailError: Utils.validateEmail(this.state.email) ? "" : "Invalid email address",
            passwordError: Utils.isPasswordValid(this.state.password) ? "" : "Password should contain 1 special character"
        });
        return Utils.validateEmail(this.state.email) && Utils.isPasswordValid(this.state.password);
    };

    onLoginClicked = (event) => {
        event.preventDefault();
        if (this.validateLoginForm())
            Utils.basicAlert("Badhiyaaaa")
    };

    render() {
        return (
            <LoginComponent state={this.state}
                            onChangeEvent={this.onChangeEvent}
                            togglePassword={this.togglePassword}
                            onLoginClicked={this.onLoginClicked}/>
        );
    }
}

export default Login;