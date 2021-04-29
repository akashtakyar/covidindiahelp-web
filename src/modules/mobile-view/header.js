import React, {useState} from 'react'
import '../columns/column.css'
import Credits from '../columns/credits';
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
             <Column>   
            <Column className="navbar-cont">
                <Row style={{height: "100%", alignItems: 'center', columnGap: '5px'}}>
                <Column className="drawericon" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/hands.svg" alt={'Covid Help'} />
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "12px", marginLeft: '10px'}}>Covid India
                        Help</Column>                      
                </Row>
            </Column>
            </Column>

            <Column>
            {/* <Column><img src="/images/add.svg"></img></Column>
            <Column><img src="/images/share.svg"></img></Column> */}
            <Column  className="navbar-cont">
                <Row className="bookmarked"
                     style={{ cursor: 'pointer' }}>
                         {props.isInfo ?
                         <>
                         <img onClick={()=>{window.open("https://forms.gle/5LhpNqX1vCYb671P7")}}
                         className='header-icons' src="/images/add.svg"></img>
                         <img className='header-icons' src="/images/share.svg"></img>
                         </> :
                         <img className='header-icons' src="/images/info.svg" onClick={() => setshowCredits(!showCredits)} />
                        }
               </Row>
                <Credits show={showCredits} setShow={setshowCredits}/>
            </Column>
            </Column>
            
        </Row>
    );
}

export default NavbarComponent;