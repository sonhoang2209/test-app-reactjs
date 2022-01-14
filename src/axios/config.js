import axios from "axios";

axios.defaults.timeout = 60000
axios.defaults.baseURL = 'https://api.thecoffeehouse.com/api/v5'

axios.interceptors.request.use( function ( config )  {

    return config
}, function (err) {
    return Promise.reject(err) // return err
})


//sau khi request xong
axios.interceptors.response.use( function ( response )  {
   return response
}, function (err) {
    // day laf vd
    if(err.response.status === 403)  {
        // throw 'Server inter'
    } 
})

export default axios

    // config.headers.Cookie.common['TCH-DEVICE-ID'] = '7054bf0b-3da3-43ac-b568-7077e92d717f';
    // config.headers.Cookie.common['TCH-APP-VERSION'] = '5.3.0';
    // config.headers.Cookie.common['Accept'] = 'application/json';