function Request(api, data) {
	// let base_url = "http://127.0.0.1:8848/notejs/promise";
	let base_url = "https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy";
	return new Promise((resolve, reject) => {
		let ajax = new XMLHttpRequest();
		ajax.open('GET', base_url + api, true);
		ajax.setRequestHeader('content-type', ''); //设置头部
		ajax.send(data);
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4) {
				if (ajax.status == 200) { //设置获取数据的语句
					resolve(ajax.response)
				} else {
					reject("请求错误")
				}
			}
		}
	})
}
