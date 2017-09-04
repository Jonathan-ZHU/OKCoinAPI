var _autho = null;

OKCoin = function (autho) {
  _autho = autho;
};

OKCoin.prototype.tickerApi = function (params = null){

};


//获取OKCoin行情（盘口数据）
	public function tickerApi($params = null) {
		return $this -> get("/api/v1/ticker.do", $params);
	}

exports.OKCoin = Okcoin
