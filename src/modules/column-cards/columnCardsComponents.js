import React from 'react'
import './column-cards.css'
import 'antd/dist/antd.css';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

function ColumnCardComponent(props) {
    return (
        <Card className="m-10">
            <CardContent>
                <Typography className="mb-10" variant="body2">
                    Verified On 23/4/21
                    <span className="vote-count">+8</span>
                    </Typography>
                <Typography variant="body2">Rajeev Gandhi Super Speciality Hospital, Dilshad Garden</Typography>
            </CardContent>
        </Card>
    );
}

export default ColumnCardComponent;