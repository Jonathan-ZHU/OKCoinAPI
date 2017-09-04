var requester = require("./OKCoin/Requestor.js");
var rpc = require("./OKCoin/Rpc.js");
var autho = require("./OKCoin/Autho.js");
var simpleautho = require("./OKCoin/SimpleAutho.js");

const API_BASE = '/api/v1/';
const WEB_BASE = 'https://www.okcoin.com/';//OKCoin国际站

var _rpc = null;
var _authentication = null;

Base = function (autho, token = null, apiKeySecret = null) {
  // First off, check for a legit authentication class type

  // if (is_a($authentication, 'OKCoin_Authentication')) {
  //   $this -> _authentication = $authentication;
  // } else {
  //   // Here, $authentication was not a valid authentication object, so
  //   // analyze the constructor parameters and return the correct object.
  //   // This should be considered deprecated, but it's here for backward compatibility.
  //   // In older versions of this library, the first parameter of this constructor
  //   // can be either an API key string or an OAuth object.
  //   if ($tokens !== null) {
  //     $this -> _authentication = new OKCoin_OAuthAuthentication($authentication, $tokens);
  //   } else if ($authentication !== null && is_string($authentication)) {
  //     $apiKey = $authentication;
  //     if ($apiKeySecret === null) {
  //       // Simple API key
  //       $this -> _authentication = new OKCoin_SimpleApiKeyAuthentication($apiKey);
  //     } else {
  //       $this -> _authentication = new OKCoin_ApiKeyAuthentication($apiKey, $apiKeySecret);
  //     }
  //   } else {
  //     throw new OKCoin_ExceptionOKCoin('Could not determine API authentication scheme');
  //   }
  // }
  if (1){
    _authentication = autho;
  } else {
    if(token !== null) {
      //...
    }
  }

  _rpc = new rpc.Rpc(new requester.Requester(), _authentication);

};

// OKCoinBase.prototype.tickerApi = function (params = null){
//
// };

exports.Base = Base;
