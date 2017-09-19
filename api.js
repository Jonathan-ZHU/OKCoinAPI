var okcoin = require("./OKCoin/Okcoin.js");

const API_KEY = "ec7e8719-d39f-468c-b473-6abd8bf8c0d2";
const SECRET_KEY = "3F5A4B381253184BB3EE65E8FF038018";

var client = new okcoin.Okcoin({apiKey:API_KEY,apiKeySecret:SECRET_KEY});


// client.tickerApi({symbol:'btc_cny'},function(err,ret){
//   console.log(ret);
// });

// client.depthApi({symbol:'btc_cny',size:5},function(err,ret){
//
//   console.log(ret);
// });

// client.tradesApi({symbol:'btc_cny'},function(err,ret){
//   console.log(ret);
// });
//
// client.klineDataApi({symbol:'btc_cny',type:'1day'},function(err,ret){
//   console.log(ret);
// });


// var params = {symbol:'btc_usd',size:5};
// var result = client.depthApi(params);
// console.log(result);

//获取用户信息
// client.userinfoApi({api_key:API_KEY},function(err,ret){
//   console.log(ret);
// });
//$params = array('api_key' => API_KEY);
//$result = $client -> userinfoApi($params);
