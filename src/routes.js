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
import States from './modules/mobile-view/select-states'
import Category from './modules/mobile-view/select-category';
import Leads from './modules/mobile-view/leads';


class Routes extends BaseComponent {

    componentDidMount() {

    }

    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Main}/>
                        {/* <Route exact path={'/:state'} component={Main}/>
                        <Route exact path={'/:state/:category'} component={Main}/> */}
                        <Route exact path="/about" component={AddInfo} />
                        <Route exact path="/state" component={States}/>
                        <Route exact path="/state/:value/category" component={Category}/>
                        <Route exact path="/state/:value/category/:cat" component={Leads}/>
                   
                        <Redirect exact from='*' to="/"/>
                        
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps)(Routes);