import React from "react";
import BaseComponent from '../../baseComponent'
import SelectCategoryComponent from './selectCategoryComponent'
import {getCategories} from "../../../services/columns"
import {history} from '../../../managers/history'



class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryList:[],
            selectedState:''
        }
    }

    async componentDidMount() {
    console.log("tstvaxb,  x, ",this.props.location.state.name);
    this.setState({selectedState:this.props.location.state.name});
    this.getAllCategories();

    }

    getAllCategories=async()=>{
        const {responseData,error}=await  getCategories();
        console.log("categories",responseData);
        if(!responseData) return
        this.setState({categoryList:responseData})
    }
    onSelectCategory=async(value)=>{
        history.push({
            pathname:`/state/${this.state.selectedState}/category/${value}`,
            state:{name:this.state.selectedState,
                    category:value}
        })
    }
    onBackToSelectState=async()=>{
        history.push({
            pathname: `/state`,
            state:{name:this.state.selectedState}
         })
    }
  
    render() {
        return (
            <SelectCategoryComponent
                state={this.state}
                onSelectCategory={this.onSelectCategory}
                onBackToSelectState={this.onBackToSelectState}
            />
        );
    }
}

export default Category;