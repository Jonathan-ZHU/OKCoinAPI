var _apiKey=null;
var _apiKeySecret=null;

Autho = function (apiKey, apiKeySecret) {
  _apiKey = apiKey;
  _apiKeySecret = apiKeySecret;
};

Autho.prototype.getData = function (){
  var data = {
    apiKey: _apiKey,
    apiKeySecret: _apiKeySecret
  }
  return data;
};

exports.Autho = Autho;
