/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
        REGISTER_DEVICE: '/device',

    }
};

export const stateNamesConstant = {
    andhra: "Andhra Pradesh",
    arunachal: "Arunachal Pradesh",
    assam: "Assam",
    bihar: "Bihar",
    chandigarh: "Chandigarh",
    chhattisgarh: "Chhattisgarh",
    dadra: "Dadra and Nagar Haveli",
    daman: "Daman and Diu",
    delhi: "Delhi",
    goa: "Goa",
    gujarat: "Gujarat",
    haryana: "Haryana",
    himachal: "Himachal",
    jammu: "Jammu",
    jharkhand: "Jharkhand",
    karnataka: "Karnataka",
    kerala: "Kerala",
    lakshadweep: "Lakshadweep",
    madhya: "Madhya Pradesh",
    maharashtra: "Maharashtra",
    manipur: "Manipur",
    meghalaya: "Meghalaya",
    mizoram: "Mizoram",
    nagaland: "Nagaland",
    odisha: "Odisha",
    puducherry: "Puducherry",
    punjab: "Punjab",
    rajasthan: "Rajasthan",
    sikkim: "Sikkim",
    tamil: "Tamil Nadu",
    telangana: "Telangana",
    tripura: "Tripura",
    uttarakhand: "Uttarakhand",
    uttar: "Uttar Pradesh",
    west: "West Bengal"
}

export const eventConstants = {
    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",
}
export const cookiesConstants = {
    DISCLAIMER: 'DISCLAIMER',
    DEVICE_ID: 'deviceId',
};


export const genericConstants = {
    WEB_COMPONENT_TYPE: {
        STATE: "STATE",
        CATEGORY: "CATEGORY",
        CARDS: "CARDS",
    }
}
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

export const voteTypeConstants = {
    UP_VOTE:'UP_VOTE',
    DOWN_VOTE:'DOWN_VOTE'
}