import React from 'react'
import './column-cards.css'
import 'antd/dist/antd.css';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import moment from 'moment'
function ColumnCardComponent(props) {
    return (
        <>
            {props.responseData && props.responseData.map(ite => (
                <Card className="m-10">
                    <CardContent className="card-desc-container">
                        <Typography className="mb-10" variant="body2">
                              
                        </Typography>
                        <Typography className="card-desc" variant="body2">{ite.description}</Typography>
                        <Typography className="card-timestamp" variant="body2"> {ite.state} {ite.district} {moment(ite.channelCreatedOn).fromNow()}</Typography>
                    </CardContent>
                </Card>
            ))}
        </>

    );
}

export default ColumnCardComponent;