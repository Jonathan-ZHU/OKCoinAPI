const request = require('request');

Requester = function () {

};

Requester.prototype.doCurlRequest = function (data, callback){
  request.post(
    // {
    //   url:'http://localhost:9095/phpTest.php',
    //   form:{
    //     username:'hahaha',
    //     password:'wowowowow'
    //   },
      // headers: {
      //   'User-Agent': 'request'
      // }
    //   encoding:'utf8'
    // },
    data,
    function(error, response, body){
      if(response.statusCode == 200){
        callback(null,body);
      }else{
        var err = response.statusCode;
        var msg = response.statusCode;
        callback(err,msg);
        return;
      }
    }
  );
};

exports.Requester = Requester;
