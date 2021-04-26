import React from 'react'
import './column-cards.css'
import 'antd/dist/antd.css';
import {Avatar, Card, CardContent, Typography} from '@material-ui/core';
import moment from 'moment'
import {Row, Column} from "simple-flexbox";
import utility from "../../utility";

function ColumnCardComponent(props) {
    return (
        <>

            {

                props.responseData.length > 0 ?
                    props.responseData && props.responseData.map((ite, index) => (
                        <Card className="m-10" key={index}>
                            <CardContent className="card-desc-container">
                                <Typography className="mb-10" variant="body2">

                                </Typography>
                                <Typography className="card-desc" variant="body2">{ite.description}</Typography>
                                <Row className="card-timestamp">
                                    <Row className="card-vote-buttons" style={{cursor: 'pointer'}}><span
                                        className="underline-text" onClick=
                                        {() => {


                                            props.incrementUpVote(ite._id);

                                            props.sendUpVoteRequest(ite._id)
                                        }}
                                    >Working:&nbsp;{ite.upVoteCount}</span>&nbsp;&nbsp;

                                        <span className="card-vote-buttons  underline-text" style={{cursor: 'pointer'}}
                                              onClick=
                                                  {() => {
                                                      props.incrementDownVote(ite._id);
                                                      props.sendDownVoteRequest(ite._id)
                                                  }}
                                        >Not working:&nbsp;{ite.downVoteCount}</span></Row>&nbsp;

                                    <Column
                                        className="card-footer-info">{utility.toSentenceCase(ite.state)} {utility.toSentenceCase(ite.district)} {moment(ite.channelCreatedOn).fromNow()}</Column>
                                </Row>
                            </CardContent>
                        </Card>
                    )
                    ) :
                    <div
                        className="loading">{props?.originalResponseData?.length < 1 && 'Loading...' || 'No leads available. Search for other cities.'}</div>
            }
        </>

    );
}

export default ColumnCardComponent;