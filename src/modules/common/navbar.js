import React, {useState} from 'react'
import {Column, Row} from "simple-flexbox";

function ColumnComponent(props) {

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
                        <img src="/images/drawericon.png" alt={'Refresh'} width={'24px'} onClick={() => props.drawerToggleClickHandler()}/>
                    </Column>
                    
                </Row>
            </Column>
        </Row>
    );
}

export default ColumnComponent;