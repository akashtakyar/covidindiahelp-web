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
    API_END_POINT: {}
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
    bengal: "West Bengal"
}

export const genericConstants = {
    WEB_COMPONENT_TYPE: {
        STATE: "STATE",
        CATEGORY: "CATEGORY",
        CARDS: "CARDS",
    }
}
