import React from 'react'
import {Column, Row} from "simple-flexbox";
import {TwitterTweetEmbed} from "react-twitter-embed";
import {Typography} from "@material-ui/core";
import moment from "moment";
import utility from "../../utility";
import Button from '@material-ui/core/Button';

import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import {NotWorkingDialog} from "../mobile-view/leads/lead";
import {voteTypeConstants} from "../../constants";

const LeadDetailsComponent = (props) => {
    const {isVolunteerView} = props;
    const {leadDetails} = props.state;
    return (

        <>
        {Object.keys(leadDetails).length?
        <div>
            <div className="dialog-box" style={{maxWidth: '90%', margin: 'auto', paddingBottom: '14vh'}}>
                {isVolunteerView && <>
                <Row className="justify-content-between">
                    <Column>
                        <b>{leadDetails?.type === "SUPPLY" ? "YOU CAN HELP" : "YOU CAN HELP"}</b>
                </Column>
                    <Column>
                        <button className="bt-refresh" onClick={props.getVolunteerDetails}>Refresh</button>
                </Column>
                </Row>
                    <div className="p-b-10">
                    {leadDetails?.type === 'SUPPLY' ?
                        <p className="p-t-20 fc-grey fs-14">Please call the number and find out if this information is working
                            or not
                            working; after finishing the call, click on the Working or Not Working.</p> :
                        <p className="p-t-20 fc-grey fs-14">Please go through the list of resources on
                            <a target="_blank"
                               className="cursor-pointer"
                               href={`https://app.missionhumane.org/${leadDetails?.state}/${leadDetails?.category?.toLowerCase()}`}> app.missionhumane.org/{leadDetails?.state}/{leadDetails?.category?.toLowerCase()}</a> and
                            find a relevant source for this following request. If you have found some help, please reach
                            out to them and provide them the information.</p>}
                </div>
                </>}
                {/*<Row className="dialog-header">*/}
                {/*    <b className="p-b-10">Details</b>*/}
                {/*</Row>*/}
                {props.state?.leadDetails &&
                typeof props.state?.leadDetails.attachments === 'object' &&
                typeof props.state?.leadDetails.attachments.media_keys === 'object'
                && props.state?.leadDetails.attachments.media_keys.length
                    ? (
                        <>
                            {props.state?.uniqueContact && props.state?.uniqueContact.length > 0 ? (
                                <div className="p-t-20 p-r-20">Contact :</div>
                            ) : (
                                ""
                            )}
                            {props.state?.uniqueContact && props.state?.uniqueContact.length > 0
                                ? props.state?.uniqueContact.map((data) => (
                                    <div className="">
                                        <a href={`tel:${data}`}>{data}</a>
                                    </div>
                                ))
                                : ""}
                            <TwitterTweetEmbed
                                options={{width: 400}}
                                tweetId={props.state?.leadDetails.channelID}
                            />

                            <Row className="card-timestamp">
                                <Column>
                                    <div className="p-t-20 p-r-20 p-b-10 bottom-text">
                                        {props.state?.leadDetails?.comments?.length > 0 && props.state?.leadDetails.comments.map((comment, index) =>
                                            comment.type === voteTypeConstants.DOWN_VOTE &&
                                            <Typography className="card-desc pt-1"
                                                        variant="body2">
                                                <span
                                                    className="p-t-20 bottom-text">{moment(comment.addedOn).fromNow()}</span> {" "}<span
                                                className="fc-black">{comment.description}</span>
                                            </Typography>
                                        ) || moment(props.state?.leadDetails?.channelCreatedOn || '').fromNow()}
                                    </div>
                                </Column>
                                <Column>
                                    <div className="p-t-20 p-r-20 p-b-10 bottom-text">
                                        {`Source: ${utility.toSentenceCase(props.state?.leadDetails?.channel || '')}`}
                                    </div>
                                </Column>
                            </Row>
                        </>
                    ) : (
                        <div className="selected-item ">
                            <div className="p-l-20 p-t-20 p-r-20 fs-14">
                                {" "}
                                {props.state?.leadDetails.description}
                            </div>
                            {props.state?.uniqueContact && props.state?.uniqueContact.length > 0 ? (
                                <div className="p-l-20 p-t-20 p-r-20 fs-14">Contact :</div>
                            ) : (
                                ""
                            )}
                            {props.state?.uniqueContact && props.state?.uniqueContact.length > 0
                                ? props.state?.uniqueContact.map((data) => (
                                    <div className="p-l-20  fs-14">
                                        <a href={`tel:${data}`}>{data}</a>
                                    </div>
                                ))
                                : ""}
                            <Row className="card-timestamp">
                                <Column>
                                    <div className="p-l-20 p-t-20 p-r-20 p-b-10 bottom-text">
                                        {props.state?.leadDetails?.comments?.length > 0 && props.state?.leadDetails.comments.map((comment, index) =>
                                            comment.type === voteTypeConstants.DOWN_VOTE &&
                                            <Typography className="card-desc pt-1"
                                                        variant="body2">
                                                <span
                                                    className="p-t-20 bottom-text">{moment(comment.addedOn).fromNow()}</span> {" "}<span
                                                className="fc-black">{comment.description}</span>
                                            </Typography>
                                        ) || moment(props.state?.leadDetails?.channelCreatedOn || '').fromNow()}
                                    </div>
                                </Column>
                                {props.state?.leadDetails?.comments?.length < 1 && <Column>
                                    <div className="p-l-20 p-t-20 p-r-20 p-b-10 bottom-text">
                                        {`Source: ${utility.toSentenceCase(props.state?.leadDetails?.channel || '')}`}
                                    </div>
                                </Column>}
                            </Row>
                        </div>
                    )}
                {props.state?.leadDetails?.comments?.length > 0 && <Row>
                    <div className="p-l-20 bottom-text" style={{textAlign: 'end'}}>
                        {`Source: ${utility.toSentenceCase(props.state?.leadDetails?.channel || '')}`}
                    </div>
                </Row>}

                <Row className="card-timestamp p-t-20">
                    <Row className="card-vote-buttons" style={{cursor: "pointer"}}>
            <span
                className=" working-text"
                onClick={() => {
                    props.sendUpVoteRequest(props.state?.leadDetails._id, "");
                }}
            >
              <img
                  style={{width: "20px", paddingRight: "1px"}}
                  src="/images/Working.svg"
                  alt={'image'}/>
              Working:{props.state?.leadDetails.upVoteCount}
            </span>
                        &nbsp;
                        <span
                            className="  not-working-text"
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                props.handleNotWorkingPopoverOpen();
                                // props.incrementDownVote(props.state?.leadDetails._id);
                                // props.sendDownVoteRequest(props.state?.leadDetails._id, "");
                            }}
                        >
              <img
                  style={{width: "20px", paddingRight: "1px"}}
                  src="/images/NotWorking.svg"
              ></img>
              Not working:{props.state?.leadDetails.downVoteCount}
            </span>
                    </Row>
                    &nbsp;
                    <Column className="card-footer-info">
                        <Row>
                            <FacebookShareButton
                                style={{paddingRight: "3px"}}
                                url={process.env.REACT_APP_WEBAPP_URL}
                                quote={`${props.state?.leadDetails.description} Found at`}
                            >
                                <FacebookIcon size={20} round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <WhatsappShareButton
                                style={{paddingRight: "3px"}}
                                url={process.env.REACT_APP_WEBAPP_URL}
                                title={`${props.state?.leadDetails.description} Found at`}
                            >
                                <WhatsappIcon size={20} round={true}></WhatsappIcon>
                            </WhatsappShareButton>
                            <TwitterShareButton
                                url={process.env.REACT_APP_WEBAPP_URL}
                                title={`${props.state?.leadDetails.description} Found at`}
                            >
                                <TwitterIcon size={20} round={true}/>
                            </TwitterShareButton>
                        </Row>
                    </Column>
                </Row>
            </div>

            {props.state.isShowNotWorkingPopup && <NotWorkingDialog state={props.state}
                                                                    handlePopoverClose={props.handleNotWorkingPopoverClose}
                                                                    sendDownVoteRequest={props.sendDownVoteRequest}
                                                                    incrementDownVote={(id) => console.log(id)}
            />}

        </div>

                :
                <Row className="justify-content-center m-5"><div className="">No request at the moment</div></Row>
        }
        </>)

}
export default LeadDetailsComponent
