import {httpService} from "../managers/httpService";
import {httpConstants} from "../constants";



export default {
    states,
    upVote,
    downVote,
    getCategories,
    getFilteredData,
    getStates: getTags
}


export async function states(toadd){
    let url = `https://www.covidindiahelp.info:3002/getCards?duration=2000000&state=` + toadd;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
            // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}



export async function upVote(id){
    let url = `https://www.covidindiahelp.info:3002/upVote?id=` + id;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
                // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}




export async function downVote(id){
    let url = `https://www.covidindiahelp.info:3002/downVote?id=` + id;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
                // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}

export async function getCategories(req){
    let url = `https://www.covidindiahelp.info:3001/tags?type=CATEGORY`;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
                // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}

export async function getFilteredData(req){
    let url = `https://www.covidindiahelp.info:3002/getCards?duration=2000000&state=${req.state}&category=${req.category}`;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
                // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}
export async function getTags(){
    let url = `https://www.covidindiahelp.info:3001/tags`;
    return httpService(httpConstants.METHOD_TYPE.GET, {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON},{},url)
        .then(response => {
                // console.log("response dasd",response)
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            // console.log("err dasd",err)
            return Promise.reject(err);
        });
}
