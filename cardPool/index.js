	
	function matchUrl(url,dataObject) {
		switch(url) {
			case '/card_pool/upload_card':
				return uploadCard(dataObject)
				break;
			// case '/card_pool/download':
			// 	 console.log(2)
			// 	 break;
			// case '/card_pool/upload':
			// console.log(3)
			// break;
 	} 
	}
	function uploadCard(dataObject) {
		console.log(dataObject)
		return dataObject
	}
	module.exports= {
		matchUrl
	}