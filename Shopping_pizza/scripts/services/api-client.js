//performs network call
import URL from "../utils/constant.js";
 async function doNetworkCall(){
    // const URL='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
    try{
        const response= await fetch(URL);
        console.log('response is' , response);
        const object= await response.json();
        console.log('object is' , object);
        return object; //wrap promise
    }
    catch(err){
        console.log('Some problem in API call' ,err);
        throw err;
    }
    // const promise = fetch(URL);
    // console.log('Promise is', promise);
    // promise.then(function(response){ //callback
    //        console.log(response);
    //        const promise2=response.json(); //Deserialization
    //        promise2.then(data=>console.log('Data is', data)).catch(e=>console.log('Json parse error',e))
    // }).catch(function(err){
    //    console.log('error is',err);
    // });
    // console.log('Good bye');
}
export default doNetworkCall;