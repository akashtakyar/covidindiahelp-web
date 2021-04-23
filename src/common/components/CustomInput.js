import React from "react";
import BaseComponent from "../../modules/baseComponent";

class CustomInput extends BaseComponent {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder}
                       onChange={this.props.onChange}
                       className={"w-100 outline-none input-border " + this.props.className} value={this.props.value}/>
                <div className="fc-red fs-14 py-1">{this.props.error}</div>
            </div>
        );
    }
}

export default CustomInput;