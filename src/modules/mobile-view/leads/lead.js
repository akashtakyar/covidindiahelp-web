import React from "react";
import "../../column-cards/column-cards.css";
import "antd/dist/antd.css";
import {Avatar, Card, CardContent, Typography} from "@material-ui/core";
import moment from "moment";
import {Row, Column} from "simple-flexbox";
import utility from "../../../utility";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import {TwitterTweetEmbed} from "react-twitter-embed";
import {stateNamesConstant, voteTypeConstants} from "../../../constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {isIOS, isIOS13, isIPad13, isPod13} from "react-device-detect";

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    WhatsappShareButton,
    TwitterShareButton,
} from "react-share";
import PushAlertComponent from "../../pushAlert";

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: "none",
        maxWidth: "400px",
        border: "none",
        background: "white",
    },
    select: {
        fontSize: "12px",
    },
}));

function LeadsComponent(props) {
    const classes = useStyles();
    let latestComment =null
    console.log("Props1111",props);
    return (
        <>
            {DialogBox(props)}
            {NotWorkingDialog(props)}
            <Row className="selected-param">
                <Column style={{width: "100%"}}>
                    <Row
                        justifyContent="space-between"
                        alignItems="center"
                        style={{width: "100%"}}
                    >
            <span>
              <img
                  alt="back"
                  onClick={props.backToSelectCategory}
                  style={{
                      width: "35px",
                      height: "30px",
                      fill:
                          "invert(44%) sepia(97%) saturate(3395%) hue-rotate(187deg) brightness(101%) contrast(109%)",
                  }}
                  src="/images/BackButton.svg"
              />
            </span>
                        <span className="selected">
            {`${
                stateNamesConstant[props.selectedState]
            }/${utility.toSentenceCase(props.selectedCategory)}`}
          </span>
                        {!isIOS && !isIOS13 && !isIPad13 && !isPod13 ? (
                            <PushAlertComponent
                                selectedCategory={props.selectedCategory}
                                selectedState={props.selectedState}
                            />
                        ) : (
                            ""
                        )}
                    </Row>
                </Column>
            </Row>
            <Row style={{padding: "15px 5px 15px 15px"}} className="sort-by">
                <Column style={{width: "60%"}}>
                    <Select
                        className={classes.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.state.selectedSortingAttr}
                        onChange={props.onSelectSorting}
                    >
                        <MenuItem value={"Sort"} disabled>
                            Sort By -
                        </MenuItem>
                        <MenuItem value={"recent"}>Sort By - Recent</MenuItem>
                        <MenuItem value={"working"}>Sort By - Working</MenuItem>
                    </Select>
                </Column>
            </Row>
            {props.state.allLeads.length > 0 ? (
                props.state.allLeads &&
                props.state.allLeads.map((ite, index) => {
                    latestComment =utility.getLatestDownVoteComment(ite.comments)

                    return(
                        <>
                            <Card className="m-10" className="lead-card" key={index}>
                                <CardContent className="lead-container">
                                    <Typography className="mb-10" variant="body2"></Typography>
                                    <Typography
                                        className="card-desc"
                                        variant="body2"
                                        onClick={() => props.handlePopoverOpen(ite)}
                                    >
                                        {ite.description}
                                    </Typography>
                                    {ite.comments.length > 0 && <>
                                        <hr style={{marginBottom: '5px'}}/>
                                        <Typography
                                            className="card-desc pt-1"
                                            variant="body2"
                                        >
                                        <span
                                            className="bottom-text">{latestComment?.addedOn && moment(latestComment?.addedOn).fromNow()}</span> {" "}{latestComment?.description || ''}
                                        </Typography></>}

                                    <Row className="card-timestamp">
                                        <Row
                                            className="card-vote-buttons"
                                            style={{cursor: "pointer"}}
                                        >
                    <span
                        className="underline-text"
                        onClick={() => {
                            props.incrementUpVote(ite._id);
                            props.sendUpVoteRequest(ite._id);
                        }}
                    >
                      Working:&nbsp;{ite.upVoteCount}
                    </span>
                                            &nbsp;&nbsp;
                                            <span
                                                className="card-vote-buttons  underline-text"
                                                style={{cursor: "pointer"}}
                                                onClick={() => {
                                                    props.handleNotWorkingPopoverOpen(ite._id);
                                                }}
                                            >
                      Not working:&nbsp;{ite.downVoteCount}
                    </span>
                                        </Row>
                                        &nbsp;
                                        <Column className="card-footer-info">
                                            {utility.toSentenceCase(ite.state)}{" "}
                                            {utility.toSentenceCase(ite.district)}{" "}
                                            {ite.comments.length < 1 && moment(ite.channelCreatedOn).fromNow()}
                                        </Column>
                                    </Row>
                                </CardContent>
                            </Card>
                        </>
                    )
                })
            ) : (
                <div className="loading">
                    {!props.state.responseMessage &&
                    props.state.originalResponseData.length === 0
                        ? "Loading..."
                        : "No leads available. Search for other cities."}
                </div>
            )}
            <div className="hidden-div">.</div>
        </>
    );
}

export function NotWorkingDialog(props) {
    console.log("props===",props);
    return (
        <Dialog
            open={props.state.isShowNotWorkingPopup}
            close={props.handlePopoverClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="dialog-box">
                <Row className="dialog-header">
                    <Column>
                        <div className="p-b-10">Choose a reason:</div>
                    </Column>
                    <Column
                        onClick={()=>props.handlePopoverClose()}
                        style={{cursor: "pointer"}}
                    >
                        <img alt="cancel" src="/images/Cancel.svg"/>{" "}
                    </Column>
                </Row>
                <div className="p-sm-1 selected-item " style={{cursor: "pointer"}}>
                    <List>

                        <ListItem button key={""}
                                  onClick={() => {
                                      // props.incrementDownVote(props.state.id);
                                      props.sendDownVoteRequest(props.state.id, "Answered but out of stock");
                                  }}>
                            <ListItemText primary={"Answered but out of stock"}/>
                        </ListItem>
                        <ListItem button key={""}
                                  onClick={() => {
                                      // props.incrementDownVote(props.state.id);
                                      props.sendDownVoteRequest(props.state.id, "Fake");
                                  }}>
                            <ListItemText primary={"Fake/Fraud"}/>
                        </ListItem>
                        <ListItem button key={""}
                                  onClick={() => {
                                      // props.incrementDownVote(props.state.id);
                                      props.sendDownVoteRequest(props.state.id, "No answer");
                                  }}>
                            <ListItemText primary={"No answer"}/>
                        </ListItem>
                        <ListItem button key={""}
                                  onClick={() => {
                                      // props.incrementDownVote(props.state.id);
                                      props.sendDownVoteRequest(props.state.id, "Switched off/Out of coverage");
                                  }}>
                            <ListItemText primary={"Switched off/Out of coverage"}/>
                        </ListItem>
                        <ListItem
                            button
                            key={""}
                            onClick={() => {
                                // props.incrementDownVote(props.state.id);
                                props.sendDownVoteRequest(props.state.id, "Wrong phone number");
                            }}
                        >
                            <ListItemText primary={"Wrong phone number"}/>
                        </ListItem>
                    </List>
                    <Row className="txt-reason">
                     <Column>   
                    <div>Any Other Reason</div>
                     <textarea name="anyOtherReason" className="text-area-reason" onChange={props.onChangeReason}></textarea>
                     <button className="bt-refresh" onClick={()=>{props.sendDownVoteRequest(props.state.id,props.state.anyOtherReason)}}>Submit</button>
                     </Column>
                     </Row> 
                </div>
            </div>
        </Dialog>
    );
}

function DialogBox(props) {
    return (
        <Dialog
            open={props.state.isShowSharePopup}
            onClose={props.handlePopoverClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="dialog-box">
                <Row className="dialog-header">
                    <Column>
                        <div className="p-b-10">Details</div>
                    </Column>
                    <Column
                        onClick={() => props.handlePopoverClose()}
                        style={{cursor: "pointer"}}
                    >
                        <img src="/images/Cancel.svg"/>{" "}
                    </Column>
                </Row>
                {props.state.selectedItem &&
                typeof props.state.selectedItem.attachments === 'object' &&
                typeof props.state.selectedItem.attachments.media_keys === 'object'
                && props.state.selectedItem.attachments.media_keys.length
                    ? (
                        <>
                            {props.state.uniqueContact && props.state.uniqueContact.length > 0 ? (
                                <div className="p-t-20 p-r-20">Contact :</div>
                            ) : (
                                ""
                            )}
                            {props.state.uniqueContact && props.state.uniqueContact.length > 0
                                ? props.state.uniqueContact.map((data) => (
                                    <div className="">
                                        <a href={`tel:${data}`}>{data}</a>
                                    </div>
                                ))
                                : ""}
                            <TwitterTweetEmbed
                                options={{width: 400}}
                                tweetId={props.state.selectedItem.channelID}
                            />

                            <Row className="card-timestamp">
                                <Column>
                                    <div className="p-t-20 p-r-20 p-b-10 bottom-text">
                                        {props.state.selectedItem?.comments?.length > 0 && props.state.selectedItem.comments.map((comment, index) =>
                                            comment.type === voteTypeConstants.DOWN_VOTE &&
                                            <Typography className="card-desc pt-1"
                                                        variant="body2">
                                                <span
                                                    className="p-t-20 bottom-text">{moment(comment.addedOn).fromNow()}</span> {" "}<span
                                                className="fc-black">{comment.description}</span>
                                            </Typography>
                                        ) || moment(props.state.selectedItem?.channelCreatedOn || '').fromNow()}
                                    </div>
                                </Column>
                                <Column>
                                    <div className="p-t-20 p-r-20 p-b-10 bottom-text">
                                        {`Source: ${utility.toSentenceCase(props.state.selectedItem?.channel || '')}`}
                                    </div>
                                </Column>
                            </Row>
                        </>
                    ) : (
                        <div className="selected-item ">
                            <div className="p-l-20 p-t-20 p-r-20">
                                {" "}
                                {props.state.selectedItem.description}
                            </div>
                            {props.state.uniqueContact && props.state.uniqueContact.length > 0 ? (
                                <div className="p-l-20 p-t-20 p-r-20">Contact :</div>
                            ) : (
                                ""
                            )}
                            {props.state.uniqueContact && props.state.uniqueContact.length > 0
                                ? props.state.uniqueContact.map((data) => (
                                    <div className="p-l-20 ">
                                        <a href={`tel:${data}`}>{data}</a>
                                    </div>
                                ))
                                : ""}
                            <Row className="card-timestamp">
                                <Column>
                                    <div className="p-l-20 p-t-20 p-r-20 p-b-10 bottom-text">
                                        {props.state.selectedItem?.comments?.length > 0 && props.state.selectedItem.comments.map((comment, index) =>
                                            comment.type === voteTypeConstants.DOWN_VOTE &&
                                            <Typography className="card-desc pt-1"
                                                        variant="body2">
                                                <span
                                                    className="p-t-20 bottom-text">{moment(comment.addedOn).fromNow()}</span> {" "}<span
                                                className="fc-black">{comment.description}</span>
                                            </Typography>
                                        ) || moment(props.state.selectedItem?.channelCreatedOn || '').fromNow()}
                                    </div>
                                </Column>
                                {props.state.selectedItem?.comments?.length < 1 && <Column>
                                    <div className="p-l-20 p-t-20 p-r-20 p-b-10 bottom-text">
                                        {`Source: ${utility.toSentenceCase(props.state.selectedItem?.channel || '')}`}
                                    </div>
                                </Column>}
                            </Row>
                        </div>
                    )}
                {props.state.selectedItem?.comments?.length > 0 && <Row>
                    <div className="p-l-20 bottom-text" style={{textAlign: 'end'}}>
                        {`Source: ${utility.toSentenceCase(props.state.selectedItem?.channel || '')}`}
                    </div>
                </Row>}

                <Row className="card-timestamp p-t-20">
                    <Row className="card-vote-buttons" style={{cursor: "pointer"}}>
            <span
                className=" working-text"
                onClick={() => {
                    props.incrementUpVote(props.state.selectedItem._id);

                    props.sendUpVoteRequest(props.state.selectedItem._id, "");
                }}
            >
              <img
                  style={{width: "20px", paddingRight: "1px"}}
                  src="/images/Working.svg"
                  alt={'image'}/>
              Working:{props.state.selectedItem.upVoteCount}
            </span>
                        &nbsp;
                        <span
                            className="  not-working-text"
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                props.handleNotWorkingPopoverOpen(props.state.selectedItem._id);
                                // props.incrementDownVote(props.state.selectedItem._id);
                                // props.sendDownVoteRequest(props.state.selectedItem._id, "");
                            }}
                        >
              <img
                  style={{width: "20px", paddingRight: "1px"}}
                  src="/images/NotWorking.svg"
              ></img>
              Not working:{props.state.selectedItem.downVoteCount}
            </span>
                    </Row>
                    &nbsp;
                    <Column className="card-footer-info">
                        <Row>
                            <FacebookShareButton
                                style={{paddingRight: "3px"}}
                                url={process.env.REACT_APP_WEBAPP_URL}
                                quote={`${props.state.selectedItem.description} Found at`}
                            >
                                <FacebookIcon size={20} round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <WhatsappShareButton
                                style={{paddingRight: "3px"}}
                                url={process.env.REACT_APP_WEBAPP_URL}
                                title={`${props.state.selectedItem.description} Found at`}
                            >
                                <WhatsappIcon size={20} round={true}></WhatsappIcon>
                            </WhatsappShareButton>
                            <TwitterShareButton
                                url={process.env.REACT_APP_WEBAPP_URL}
                                title={`${props.state.selectedItem.description} Found at`}
                            >
                                <TwitterIcon size={20} round={true}></TwitterIcon>
                            </TwitterShareButton>
                        </Row>
                    </Column>
                </Row>
            </div>
        </Dialog>
    );
}

export default LeadsComponent;
