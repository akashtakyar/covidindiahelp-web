import React, {useState} from 'react'
import './column.css'

function ColumnComponent(props) {

    return (
        <div className="backdrop" 
            onClick={props.close}
        />
    );
}

export default ColumnComponent;