var _apiKey=null;

SimpleAutho = function (apiKey) {
  _apiKey = apiKey;
};

SimpleAutho.prototype.getData = function (){
  var data = {
    apiKey: _apiKey
  }
  return data;
};

exports.SimpleAutho = SimpleAutho;
