	
	function matchUrl(req,dataObject,mysql) {
		switch(req.url) {
			case '/card_pool/upload_card':
				return uploadCard(dataObject,mysql)
				break;
			// case '/card_pool/download':
			// 	 console.log(2)
			// 	 break;
			// case '/card_pool/upload':
			// console.log(3)
			// break;
 		} 
	}

	// 上传卡片
	function uploadCard(dataObject,mysql) {
		mysql.insert({
			name: 'zs',
			age: '13',
			work: 'aaa'
		},'test')
		console.log(dataObject)
		return 'ok'
	}
	module.exports= {
		matchUrl
	}