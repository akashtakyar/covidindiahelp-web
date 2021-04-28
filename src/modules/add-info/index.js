import React from "react";
import BaseComponent from '../baseComponent'
import AddInfoComponent from './addInfoComponent'
import {history} from "../../managers/history";

class AddInfo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen:false
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
        else if(index==1)
        {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLScFjzTeZ2jr3in3uPEKkHGHgAwDxAm98yH4INz8FjXHG-dSfQ/viewform")
            this.setState({
              drawerOpen: !this.state.drawerOpen
            })
        }
        else if(index==2)
        {
          this.setState({
              isAbout: true
            })
            this.setState({
              drawerOpen: !this.state.drawerOpen
            })
           history.push('/about'); 
        }
    }
    

    render() {
        return (
            <AddInfoComponent
            state={this.state}
                drawerToggleClickHandler={this.drawerToggleClickHandler}
                handleNavigate={this.handleNavigate}
                backdropClickHandler={this.backdropClickHandler}
            />
        );
    }
}

export default AddInfo;