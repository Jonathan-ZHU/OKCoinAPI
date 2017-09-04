var _requestor;
var _authentication;

Rpc = function (requestor, authentication){
  _requestor = requestor;
  _authentication = authentication;
}

Rpc.prototype.request(method, url, params) {

  // Headers
  var headers = {'User-Agent: OKCoinNodejs/v1'} ;

  //GET USER APIKEY
	var auth = _authentication.getData();

  method = method.toLowerCase()

  if ($method == 'get') {

			if (params != null) {
				$queryString = http_build_query($params);
				$url .= "?" . $queryString;
			}
	}

}
