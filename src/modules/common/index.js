import React from "react";
import BaseComponent from '../baseComponent'
import Drawer from './drawer'
import {history} from "../../managers/history";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            
            isAbout:false,
            drawerOpen: false,

        }
    }

    componentDidMount() {
    }



    drawerToggleClickHandler = () => {
        this.setState({
          drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
          drawerOpen: false
        })
      }

      handleNavigate=(index)=>{
          console.log(index);
          if(index==0){
            history.push('/');
            this.setState({
                drawerOpen: !this.state.drawerOpen
              })
          }
          else if(index==1){

          }
          else if(index==2)
          {
            this.setState({
                isAbout: true
              })
             history.push('/about'); 
          }
    //    history.push('/add-information');
      }

    render() {
        return (
            <>
        
            <Drawer handleNavigate={this.handleNavigate} show={this.state.drawerOpen}/>
            
            </>
        );
    }
}

export default Coloumn;