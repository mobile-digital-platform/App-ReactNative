import {AsyncStorage} from 'react-native';
import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config	from '../../../config';
import API		from '../../../services/api';
import st		from '../../../services/storage';

export const UserRecord = () => ({
	id:				0,
	phone:			null,
	phone_confirmed:false,
	mail:			null,
	mail_confirmed:	false,
	name:			null,
	father:			null,
	family:			null,
	gender:			null,
	city:			0,
	push_token:		null,
});

export const ReducerRecord = () => ({
	user: UserRecord(),
	error: null,
	initialized: false,
	loading: false,
	loaded: false,
});

// Постоянные

export const module = 'settings';

export const REMOVE_ERROR				= config.name+'/'+module+'/REMOVE_ERROR';

// Авторизация
export const REGISTRATION_REQUEST		= config.name+'/'+module+'/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS		= config.name+'/'+module+'/REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR			= config.name+'/'+module+'/REGISTRATION_ERROR';

// Авторизация
export const AUTHORIZATION_REQUEST		= config.name+'/'+module+'/AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS		= config.name+'/'+module+'/AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_ERROR		= config.name+'/'+module+'/AUTHORIZATION_ERROR';

// Получение данных
export const GET_PERSONAL_REQUEST		= config.name+'/'+module+'/GET_PERSONAL_REQUEST';
export const GET_PERSONAL_SUCCESS		= config.name+'/'+module+'/GET_PERSONAL_SUCCESS';
export const GET_PERSONAL_ERROR			= config.name+'/'+module+'/GET_PERSONAL_ERROR';

// Изменение данных
export const SAVE_PERSONAL_REQUEST		= config.name+'/'+module+'/SAVE_PERSONAL_REQUEST';
export const SAVE_PERSONAL_SUCCESS		= config.name+'/'+module+'/SAVE_PERSONAL_SUCCESS';
export const SAVE_PERSONAL_ERROR		= config.name+'/'+module+'/SAVE_PERSONAL_ERROR';

// Смена пользователя
export const LOG_OUT					= config.name+'/'+module+'/LOG_OUT';

// Запрос подтверждения телефона
export const PHONE_SEND_CODE_REQUEST	= config.name+'/'+module+'/PHONE_SEND_CODE_REQUEST';
export const PHONE_SEND_CODE_SUCCESS	= config.name+'/'+module+'/PHONE_SEND_CODE_SUCCESS';
export const PHONE_SEND_CODE_ERROR		= config.name+'/'+module+'/PHONE_SEND_CODE_ERROR';

// Подтверждение телефона
export const CONFIRM_PHONE_REQUEST		= config.name+'/'+module+'/CONFIRM_PHONE_REQUEST';
export const CONFIRM_PHONE_SUCCESS		= config.name+'/'+module+'/CONFIRM_PHONE_SUCCESS';
export const CONFIRM_PHONE_ERROR		= config.name+'/'+module+'/CONFIRM_PHONE_ERROR';

// Смена пароля
export const CHANGE_PASSWORD_REQUEST	= config.name+'/'+module+'/CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS	= config.name+'/'+module+'/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR		= config.name+'/'+module+'/CHANGE_PASSWORD_ERROR';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		case REMOVE_ERROR:				return {...st,error:null};

		// Авторизация
		case AUTHORIZATION_REQUEST:		return {...st,loading:true};
 		case AUTHORIZATION_SUCCESS:		return {
			...st,
			user: {
				...st.user,
				id: payload.id,
			},
			loading: false,
			error: null,
		};
		case AUTHORIZATION_ERROR:		return {...st,loading:false,error};

		// Получение данных
		case GET_PERSONAL_REQUEST:		return {...st,loading:true,loaded:false};
 		case GET_PERSONAL_SUCCESS:		return {
			...st,
			user: {
				...st.user,
				...payload.data,
			},
			loading: false,
			loaded: true,
			error: null,
		};
		case GET_PERSONAL_ERROR:		return {...st,loading:false,loaded:false,error};

		// Изменение данных
		case SAVE_PERSONAL_REQUEST:		return {...st,loading:true};
 		case SAVE_PERSONAL_SUCCESS:		return {...st,loading:false,error:null};
		case SAVE_PERSONAL_ERROR:		return {...st,loading:false,error};

		case LOG_OUT:
			AsyncStorage.setItem('user','');
			return {...st};

		// Запрос подтверждения телефона
		case PHONE_SEND_CODE_REQUEST:	return {...st,loading:true};
 		case PHONE_SEND_CODE_SUCCESS:	return {...st,loading:false,error:null};
		case PHONE_SEND_CODE_ERROR:		return {...st,loading:false,error};

		// Подтверждение телефона
		case CONFIRM_PHONE_REQUEST:		return {...st,loading:true};
 		case CONFIRM_PHONE_SUCCESS:		return {...st,loading:false,error:null};
		case CONFIRM_PHONE_ERROR:		return {...st,loading:false,error};

		// Смена пароля
		case CHANGE_PASSWORD_REQUEST:	return {...st,loading:true};
 		case CHANGE_PASSWORD_SUCCESS:	return {...st,loading:false,error:null};
		case CHANGE_PASSWORD_ERROR:		return {...st,loading:false,error};
	}

	return {...st};
}

// Действия
export const remove_error		= (payload) => ({type:REMOVE_ERROR});
export const register			= (payload) => ({type:REGISTRATION_REQUEST,		payload});
export const authorize			= (payload) => ({type:AUTHORIZATION_REQUEST,	payload});
export const get_personal_data	= (payload) => ({type:GET_PERSONAL_REQUEST,		payload});
export const save_personal_data	= (payload) => ({type:SAVE_PERSONAL_REQUEST,	payload});
export const log_out			= (payload) => ({type:LOG_OUT});
export const phone_send_code	= (payload) => ({type:PHONE_SEND_CODE_REQUEST,	payload});
export const confirm_phone		= (payload) => ({type:CONFIRM_PHONE_REQUEST,	payload});
export const change_password	= (payload) => ({type:CHANGE_PASSWORD_REQUEST,	payload});

// Саги
export const register_saga			= function*({payload}) {
	let {response,error} = yield call(API,'/Register',{
		Phone:		payload.phone,
		Name:		payload.name,
		MName:		payload.father,
		LName:		payload.family,
		Gender:		payload.gender,
		Email:		payload.mail,
		City:		payload.city,
		PushToken:	payload.push_token,
	});
	if(response) {
		let id = response.UserID;
		yield call(AsyncStorage.setItem,'user',JSON.stringify(Object.assign(payload,{id})));
		yield put({
			type: REGISTRATION_SUCCESS,
			payload: {
				...payload,
				id,
			}
		});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: REGISTRATION_ERROR,
			error,
		});
	}
}
export const authorize_saga			= function*({payload}) {
	let {response,error} = yield call(API('/Authorize',{
		Phone:		payload.phone,
		Password:	payload.password,
	}));
	if(response) {
		let id = response.UserID;
		yield call(st.set,'user',{id});
		yield put({
			type: AUTHORIZATION_SUCCESS,
			payload: {
				...payload,
				id,
			}
		});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: AUTHORIZATION_ERROR,
			error,
		});
	}
}
export const get_personal_saga		= function*({payload}) {
	let {response,error} = yield call(API,'/UserDataGet',{UserID:payload});
	if(response) {
		yield put({
			type: GET_PERSONAL_SUCCESS,
			payload: response,
		});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: SAVE_PERSONAL_ERROR,
			error,
		});
	}
}
export const save_personal_saga		= function*({payload}) {
	let obj = {};
	if(payload.phone)	obj.UserID	= payload.phone;
	if(payload.name)	obj.Name	= payload.name;
	if(payload.father)	obj.MName	= payload.father;
	if(payload.family)	obj.LName	= payload.family;
	if(payload.gender)	obj.Gender	= payload.gender;
	if(payload.city)	obj.City	= payload.city;

	let {response,error} = yield call(API,'/UserDataEdit',obj);
	if(response) {
		let user_data = yield call(AsyncStorage.getItem,'user');
		yield call(AsyncStorage.setItem,'user',Object.assign(user_data,payload));
		yield put({type:SAVE_PERSONAL_SUCCESS});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: SAVE_PERSONAL_ERROR,
			error,
		});
	}
}
export const phone_send_code_saga	= function*({payload}) {
	let {response,error} = yield call(API,'/PhoneSendCode',{UserID:payload.user_id});

	if(response) yield put({type:PHONE_SEND_CODE_SUCCESS});
	if(error) {
		console.log('error',error);
		yield put({
			type: PHONE_SEND_CODE_ERROR,
			error,
		});
	}
}
export const phone_confirm_saga		= function*({payload}) {
	let {response,error} = yield call(API,'/Authorize',{
		UserID:	payload.user_id,
		Code:	payload.code,
	});
	if(response) {
		yield put({type:CONFIRM_PHONE_SUCCESS});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: CONFIRM_PHONE_ERROR,
			error,
		});
	}
}
export const change_password_saga	= function*({payload}) {
	// let {response,error} = yield call(API,'/Authorize',{
	// 	Phone:		payload.phone,
	// 	Password:	payload.password,
	// });
	if(response) {
		yield put({type:CHANGE_PASSWORD_SUCCESS});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: CHANGE_PASSWORD_ERROR,
			error,
		});
	}
}

export const saga = function*() {
	yield all([
		takeLatest(REGISTRATION_REQUEST,	register_saga),
		takeLatest(AUTHORIZATION_REQUEST,	authorize_saga),
		takeLatest(PHONE_SEND_CODE_REQUEST,	phone_send_code_saga),
		takeLatest(CONFIRM_PHONE_REQUEST,	phone_confirm_saga),
		takeLatest(CHANGE_PASSWORD_REQUEST,	change_password_saga),
		takeLatest(GET_PERSONAL_REQUEST,	get_personal_saga),
		takeLatest(SAVE_PERSONAL_REQUEST,	save_personal_saga),
	]);
}
