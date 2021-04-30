import React from "react";
import BaseComponent from '../baseComponent'
import Drawer from './drawer'
import {history} from "../../managers/history";
import  Navbar  from "./navbar";
import Backdrop from "./backdrop";

class HeaderComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            
            isHeader:true,
            drawerOpen: false,

        }
    }

    componentDidMount() {
      if(this.props.type==="about")
      this.setState({isHeader:false})
    }



    drawerToggleClickHandler = () => {
      console.log("drawerToggleClickHandler",this.state.drawerOpen);
        this.setState({
          drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
          drawerOpen: false
        })
      }

      handleNavigate=async(index)=>{
          if(index==0){
            this.setState({
              drawerOpen: !this.state.drawerOpen,isHeader:true
            })
            history.push('/');
          }
          else if(index==1){
            window.open("https://docs.google.com/forms/d/e/1FAIpQLScFjzTeZ2jr3in3uPEKkHGHgAwDxAm98yH4INz8FjXHG-dSfQ/viewform")
          }
          else if(index==2)
          {
            console.log("header");
            await this.setState({isHeader: false})
            history.push('/about'); 
          }
      }

    render() {
        return (
            <>
            <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}
                     handleChangeForCountryState={this.props.handleChangeForCountryState} onRefresh={this.props.onRefresh}
                     countryStateList={this.props.countryStateList} 
                     state={this.props.state}
                     isHeader={this.state.isHeader}
                     handleChangeForCategory={this.props.handleChangeForCategory}
            ></Navbar>
            <Drawer handleNavigate={this.handleNavigate} show={this.state.drawerOpen}/>
            {this.state.drawerOpen?
            <Backdrop close={this.backdropClickHandler}></Backdrop> : ""}
            
            </>
        );
    }
}

export default HeaderComponent;