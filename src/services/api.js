var domain = 'http://api.emg.ru/cc_v1/WebServiceCC.asmx';

export default function*(method,data = {}) {
	if(method.substr(-1) == '/') method = method.substr(0,-1);
	if(method.substr(0,1) != '/') method = '/'+method;
	if(methods.indexOf(method) != -1) {
		let res = yield fetch(domain+method,{
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
		// console.log("API: "+domain+method,data);

		// yield new Promise(res => setTimeout(res,1000));

		if(res.status == 200) {
			let data = (yield res.json()).d;
			if(!data.Result === false) {
				return {error:{message:data.code}};
			} else {
				return {response:data};
			}
		} else {
			console.log(res);
			return {error:{code:res.status,message:'Сервер не доступен'}};
		}
	} else {
		console.log("Неизвестный метод АПИ: ",method);
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
	'/GetPrizeAccessibleMethods',
	'/PrizeCenterList',
];
