import {AsyncStorage} from 'react-native';
import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config	from '../../../config';
import API		from '../../../services/api';

export const ReducerRecord = () => ({
	user_id: null
	error: null,
	initialed: false,
	loading: false,
});

// Постоянные

export const module = 'settings';

// Авторизация
export const AUTHORIZATION_REQUEST		= config.name+'/'+module+'/AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS		= config.name+'/'+module+'/AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_ERROR		= config.name+'/'+module+'/AUTHORIZATION_ERROR';

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

// Изменение данных
export const PERSONAL_REQUEST			= config.name+'/'+module+'/PERSONAL_REQUEST';
export const PERSONAL_SUCCESS			= config.name+'/'+module+'/PERSONAL_SUCCESS';
export const PERSONAL_ERROR				= config.name+'/'+module+'/PERSONAL_ERROR';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		// Авторизация
		case AUTHORIZATION_REQUEST:		return {...st,loading:true};
 		case AUTHORIZATION_SUCCESS):	return {
			...st,
			user_id: payload.id,
			loading: false,
			error: null,
		};
		case AUTHORIZATION_ERROR:		return {...st,loading:false,error};

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

		// Изменение данных
		case PERSONAL_REQUEST:			return {...st,loading:true};
 		case PERSONAL_SUCCESS:			return {...st,loading:false,error:null};
		case PERSONAL_ERROR:			return {...st,loading:false,error};
	}

	return {...st};
}

// Действия
export const authorize			= (payload) => ({type:AUTHORIZATION_REQUEST,	payload};
export const phone_send_code	= (payload) => ({type:PHONE_SEND_CODE_REQUEST,	payload};
export const confirm_phone		= (payload) => ({type:CONFIRM_PHONE_REQUEST,	payload};
export const change_password	= (payload) => ({type:CHANGE_PASSWORD_REQUEST,	payload};
export const change_personal	= (payload) => ({type:CHANGE_PERSONAL_REQUEST,	payload};

// Саги
export const authorize_saga = function*({payload}) {
	let {response,error} = yield call(API('/Authorize',{
		Phone:		payload.phone,
		Password:	payload.password,
	}));
	if(response) {
		yield put({
			type: AUTHORIZATION_SUCCESS,
			payload: {
				...payload,
				id: response.UserID,
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
};
export const phone_send_code_saga = function*({payload}) {
	let {response,error} = yield call(API('/PhoneSendCode',{UserID:payload.user_id}));

	if(response) yield put({type:PHONE_SEND_CODE_SUCCESS});
	if(error) {
		console.log('error',error);
		yield put({
			type: PHONE_SEND_CODE_ERROR,
			error,
		});
	}
};
export const phone_confirm_saga = function*({payload}) {
	let {response,error} = yield call(API('/Authorize',{
		UserID:	payload.user_id,
		Code:	payload.code,
	}));
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
};
export const change_password_saga = function*({payload}) {
	// let {response,error} = yield call(API('/Authorize',{
	// 	Phone:		payload.phone,
	// 	Password:	payload.password,
	// }));
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
};
export const change_personal_saga = function*({payload}) {
	let obj = {};
	if(payload.phone)	obj.UserID	= payload.phone;
	if(payload.name)	obj.Name	= payload.name;
	if(payload.father)	obj.MName	= payload.father;
	if(payload.family)	obj.LName	= payload.family;
	if(payload.gender)	obj.Gender	= payload.gender;
	if(payload.city)	obj.City	= payload.city;

	let {response,error} = yield call(API('/UserDataEdit',obj));
	if(response) {
		let user_data = yield call([AsyncStorage,AsyncStorage.getItem],'user');
		yield call([AsyncStorage,AsyncStorage.setItem],'user',Object.assign(user_data,payload));
		yield put({type:CHANGE_PERSONAL_SUCCESS});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: CHANGE_PERSONAL_ERROR,
			error,
		});
	}
};

export const saga = function*() {
	yield all([
		takeLatest(AUTHORIZATION_REQUEST,	authorize_saga),
		takeLatest(PHONE_SEND_CODE_REQUEST,	phone_send_code_saga),
		takeLatest(CONFIRM_PHONE_REQUEST,	phone_confirm_saga),
		takeLatest(CHANGE_PASSWORD_REQUEST,	change_password_saga),
		takeLatest(CHANGE_PERSONAL_REQUEST,	change_personal_saga),
	]);
};
