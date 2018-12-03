var domain = 'https://api.emg.ru/WebServiceCC.asmx',
	v = '';

export default (method,data = {}) => {
	if(method.substr(-1) == '/') method = method.substr(0,-1);
	if(method.substr(0,1) != '/') method = '/'+method;
	if(methods.indexOf(method) != -1) {
		return (async () => {
			try {
				let res = await fetch(domain+v+method,{
					method: 'POST',
					// mode: 'no-cors',
					// crossDomain: true,
					headers: {
						'Accept':		'application/json',
						'Content-Type':	'application/json',
						'login':		'api_emg_cc',
						'password':		'OkhoVw7UjM',
					},
					body: JSON.stringify(data),
				});
				console.log("API: "+domain+v+method,data);

				if(res.status == 200) {
					let data = await res.json();
					if(data.response)	return data.response;
					if(data.error)		throw data.error;
				}
			} catch (e) {
				console.log(e);
				throw e;
			}
		});
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
];
