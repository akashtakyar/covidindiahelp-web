import React, {useState} from 'react'
import NavBar from '../columns/navbar'
import Drawer from "../columns/drawer";
import Backdrop from "../columns/backdrop";
import './addinfo.css'

function AddInfoComponent(props) {
    
    

    return (
        <>
        <div
                    className='fs-14 fc-label-black m-t-40 mb-xs'>
                    Add Information
                </div>
                <textarea></textarea>
        </>

    );
}

export default AddInfoComponent;