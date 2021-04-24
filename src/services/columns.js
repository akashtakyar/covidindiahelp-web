import {httpService} from "../managers/httpService";
import {httpConstants} from "../constants";



export default {
    states
}


export async function states(toadd){
    let url = `http://www.covidindiahelp.info:3002/getCards?duration=2000000&state=` + toadd;
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
