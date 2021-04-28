import React, {useState} from 'react'
import '../../columns/column.css'
import Credits from '../../columns/credits';
import InfoIcon from '@material-ui/icons/Info';

import {Column, Row} from "simple-flexbox";

function NavbarComponent(props) {
console.log("testinhggg",props.isHeader);
    const [showCredits, setshowCredits] = useState(false)
    return (
        <Row
            style={{
                backgroundColor: "#474951",
                height: "35px",
                marginLeft: '0px',
                marginRight: '0px',
                alignItems: 'center',
                justifyContent: "space-between"
            }}>
            <Column className="navbar-cont">
                <Row style={{height: "100%", alignItems: 'center', columnGap: '5px'}}>
                <Column className="drawericon" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/drawer-white.png" alt={'Refresh'} width={'24px'}/>
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "12px", marginLeft: '10px'}}>Covid India
                        Help</Column>
                        
                </Row>
            </Column>
            
            <Column onClick={() => setshowCredits(!showCredits)} className="navbar-cont">
                <Row className="bookmarked"
                     style={{fontSize: "11px", cursor: 'pointer', paddingRight: '10px', position: 'relative'}}><InfoIcon
                    style={{color: 'white', fontSize: '20px'}}/> </Row>
                <Credits show={showCredits} setShow={setshowCredits}/>
            </Column>
            
        </Row>
    );
}

export default NavbarComponent;