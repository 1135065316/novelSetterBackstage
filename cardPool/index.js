	// mysql
	const mysql = require('../mysql/index')

	function matchUrl(req,data) {
		switch(req.url) {
			case '/card_pool/upload_card':
				return uploadCard(data)
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
	async function uploadCard(data) {
		await mysql.insert(data,'card_pool')
	}
	
	module.exports= {
		matchUrl
	}