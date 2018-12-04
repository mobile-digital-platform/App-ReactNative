var domain = 'http://api.emg.ru/WebServiceCC.asmx',
	v = '';

export default (method,data = {}) => {
	return function* API() {
		if(method.substr(-1) == '/') method = method.substr(0,-1);
		if(method.substr(0,1) != '/') method = '/'+method;
		if(methods.indexOf(method) != -1) {
			let res = yield fetch(domain+v+method,{
				method: 'POST',
				// mode: 'no-cors',
				// crossDomain: true,
				headers: {
					'Accept':		'application/json',
					'Content-Type':	'application/json',
					'login':		'api_emg_cc',
					'password':		'OkhoVw7UjM',
				},
				body: JSON.stringify({Data:data}),
			});
			// console.log("API: "+domain+v+method,data);

			yield new Promise(res => setTimeout(res,500));

			if(res.status == 200) {
				let data = yield res.json();
				if(data.d.result) {
					return {response:data.d};
				} else {
					return {error:data.d.code};
				}
			} else {
				// console.log(res);
				return {error:'Сервер не доступен'};
			}
		} else {
			console.log("Неизвестный метод АПИ: ",method);
		}
	}
}

var methods = [
	'/Register',
	'/JoinPromo',
	'/PhoneSendCode',
	'/PhoneConfirm',
	'/Authorize',
	'/PromoGroupList',
	'/PromoList',
	'/MailSendCode',
	'/EmailConfirm',
	'/UserDataGet',
	'/UserDataEdit',
];
