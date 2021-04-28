import React, {useState} from 'react'
import '../columns/column.css'

function ColumnComponent(props) {

    return (
        <div className="backdrop" 
            onClick={props.close}
        />
    );
}

export default ColumnComponent;