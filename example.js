//var okcoin = require("./OKCoin/Okcoin.js");
var okcoin = require("./index.js");


const API_KEY = "911ab768-0070-415c-8770-492b6371768c";
const SECRET_KEY = "19C4EAEC12F68DA3573BD36BDF83A012";

var client = new okcoin({apiKey:API_KEY,apiKeySecret:SECRET_KEY});




// 获取OKCoin行情
// BTC https://www.okcoin.cn/api/v1/ticker.do?symbol=btc_cny
// LTC https://www.okcoin.cn/api/v1/ticker.do?symbol=ltc_cny
// ETH https://www.okcoin.cn/api/v1/ticker.do?symbol=eth_cny
// ETC https://www.okcoin.cn/api/v1/ticker.do?symbol=etc_cny
// BCC https://www.okcoin.cn/api/v1/ticker.do?symbol=bcc_cny
// 示例
// # Request
// GET https://www.okcoin.cn/api/v1/ticker.do?symbol=ltc_cny
// # Response
// {
// 	"date":"1410431279",
// 	"ticker":{
// 		"buy":"33.15",
// 		"high":"34.15",
// 		"last":"33.15",
// 		"low":"32.05",
// 		"sell":"33.16",
// 		"vol":"10532696.39199642"
// 	}
// }
// 返回值说明
// date: 返回数据时服务器时间
// buy: 买一价
// high: 最高价
// last: 最新成交价
// low: 最低价
// sell: 卖一价
// vol: 成交量(最近的24小时)
//
client.tickerApi({symbol:'btc_usd'},function(err,ret){
  console.log(err);
  console.log(ret);
});
client.tickerApi({symbol:'ltc_usd'},function(err,ret){
  console.log(err);
  console.log(ret);
});
client.tickerApi({symbol:'eth_usd'},function(err,ret){
  console.log(err);
  console.log(ret);
});



//获取OKCoin交易信息(600条)
//#Request:
//symbol => btc_cny ltc_cny eth_cny etc_cny bcc_cny
//
// client.klineDataApi({symbol:'btc_cny',type:'1min',size:4,since:null},function(err,ret){
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
