import {AsyncStorage} from 'react-native';
import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config			from '../../../config';
import API				from '../../../services/api';
import st				from '../../../services/storage';
import get_push_token	from '../../../services/push_token';

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

export const SectionRecord = () => ({
	fetching: false,
	success: true,
	message: '',
	error: null,
});

export const ReducerRecord = () => ({
	user:						UserRecord(),
	registration_state:			SectionRecord(),
	authorization_state:		SectionRecord(),
	get_personal_data_state:	SectionRecord(),
	save_personal_data_state:	SectionRecord(),
	phone_send_code_state:		SectionRecord(),
	phone_confirm_state:		SectionRecord(),
	change_password_state:		SectionRecord(),
	last_action:				null,
});

// Постоянные

export const module = 'settings';

// Авторизация
export const REGISTRATION_REQUEST		= config.name+'/'+module+'/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS		= config.name+'/'+module+'/REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR			= config.name+'/'+module+'/REGISTRATION_ERROR';
export const REGISTRATION_REMOVE		= config.name+'/'+module+'/REGISTRATION_REMOVE';

// Авторизация
export const AUTHORIZATION_REQUEST		= config.name+'/'+module+'/AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS		= config.name+'/'+module+'/AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_ERROR		= config.name+'/'+module+'/AUTHORIZATION_ERROR';
export const AUTHORIZATION_REMOVE		= config.name+'/'+module+'/AUTHORIZATION_REMOVE';

// Получение данных
export const GET_PERSONAL_REQUEST		= config.name+'/'+module+'/GET_PERSONAL_REQUEST';
export const GET_PERSONAL_SUCCESS		= config.name+'/'+module+'/GET_PERSONAL_SUCCESS';
export const GET_PERSONAL_ERROR			= config.name+'/'+module+'/GET_PERSONAL_ERROR';
export const GET_PERSONAL_REMOVE		= config.name+'/'+module+'/GET_PERSONAL_REMOVE';

// Изменение данных
export const SAVE_PERSONAL_REQUEST		= config.name+'/'+module+'/SAVE_PERSONAL_REQUEST';
export const SAVE_PERSONAL_SUCCESS		= config.name+'/'+module+'/SAVE_PERSONAL_SUCCESS';
export const SAVE_PERSONAL_ERROR		= config.name+'/'+module+'/SAVE_PERSONAL_ERROR';
export const SAVE_PERSONAL_REMOVE		= config.name+'/'+module+'/SAVE_PERSONAL_REMOVE';

// Выбор города
export const CHANGE_CITY				= config.name+'/'+module+'/CHANGE_CITY';

// Смена пользователя
export const LOG_OUT					= config.name+'/'+module+'/LOG_OUT';

// Запрос подтверждения телефона
export const PHONE_SEND_CODE_REQUEST	= config.name+'/'+module+'/PHONE_SEND_CODE_REQUEST';
export const PHONE_SEND_CODE_SUCCESS	= config.name+'/'+module+'/PHONE_SEND_CODE_SUCCESS';
export const PHONE_SEND_CODE_ERROR		= config.name+'/'+module+'/PHONE_SEND_CODE_ERROR';
export const PHONE_SEND_CODE_REMOVE		= config.name+'/'+module+'/PHONE_SEND_CODE_REMOVE';

// Подтверждение телефона
export const PHONE_CONFIRM_REQUEST		= config.name+'/'+module+'/PHONE_CONFIRM_REQUEST';
export const PHONE_CONFIRM_SUCCESS		= config.name+'/'+module+'/PHONE_CONFIRM_SUCCESS';
export const PHONE_CONFIRM_ERROR		= config.name+'/'+module+'/PHONE_CONFIRM_ERROR';
export const PHONE_CONFIRM_REMOVE		= config.name+'/'+module+'/PHONE_CONFIRM_REMOVE';

// Смена пароля
export const CHANGE_PASSWORD_REQUEST	= config.name+'/'+module+'/CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS	= config.name+'/'+module+'/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR		= config.name+'/'+module+'/CHANGE_PASSWORD_ERROR';
export const CHANGE_PASSWORD_REMOVE		= config.name+'/'+module+'/CHANGE_PASSWORD_REMOVE';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;
	console.log("ACTION",type);

	switch(type) {
		// Регистрация
		case REGISTRATION_REQUEST:		return {...st,registration_state:{...st.registration_state,fetching:true}};
 		case REGISTRATION_SUCCESS:		return {
			...st,
			user: {
				...st.user,
				id: payload.id,
			},
			registration_state: {
				fetching: false,
				success: true,
				error: null,
			},
			last_action: 'registration',
		};
		case REGISTRATION_ERROR:		return {...st,registration_state:{fetching:false,success:false,error},last_action:'registration'};
		case REGISTRATION_REMOVE:		return {...st,registration_state:{...st.registration_state,error:null}};

		// Авторизация
		case AUTHORIZATION_REQUEST:		return {...st,authorization_state:{...st.authorization_state,fetching:true}};
 		case AUTHORIZATION_SUCCESS:		return {
			...st,
			user: {
				...st.user,
				id: payload.id,
			},
			authorization_state: {
				fetching: false,
				success: true,
				error: null,
			},
			last_action: 'authorization',
		};
		case AUTHORIZATION_ERROR:		return {...st,authorization_state:{fetching:false,success:false,error},last_action:'authorization'};
		case AUTHORIZATION_REMOVE:		return {...st,authorization_state:{...st.authorization_state,error:null}};

		// Получение данных
		case GET_PERSONAL_REQUEST:		return {
			...st,
			user: {
				...st.user,
				id: payload,
			},
			get_personal_data_state: {
				...st.get_personal_data_state,
				fetching: true,
			},
		};
 		case GET_PERSONAL_SUCCESS:
			let user_data = {
				phone:			payload.Phone,
				phone_confirmed:payload.PhoneConfirmed,
				mail:			payload.Email,
				mail_confirmed:	payload.EmailConfirmed,
				name:			payload.Name,
				father:			payload.MName,
				family:			payload.LName,
				gender:			payload.Gender,
				city:			payload.City,
				push_token:		payload.PushToken,
			};
			return {
				...st,
				user: {
					...st.user,
					...user_data,
				},
				get_personal_data_state: {
					fetching: false,
					success: true,
					error: null,
				},
				last_action: 'get_personal_data',
			};
		case GET_PERSONAL_ERROR:		return {...st,get_personal_data_state:{fetching:false,success:false,error},last_action:'get_personal_data'};
		case GET_PERSONAL_REMOVE:		return {...st,get_personal_data_state:{...st.get_personal_data_state,error:null}};

		// Изменение данных
		case SAVE_PERSONAL_REQUEST:		return {...st,save_personal_data_state:{...st.save_personal_data_state,fetching:true}};
 		case SAVE_PERSONAL_SUCCESS:		return {...st,save_personal_data_state:{fetching:false,success:true,	error:null},last_action:'save_personal_data'};
		case SAVE_PERSONAL_ERROR:		return {...st,save_personal_data_state:{fetching:false,success:false,	error},		last_action:'save_personal_data'};
		case SAVE_PERSONAL_REMOVE:		return {...st,save_personal_data_state:{...st.save_personal_data_state,error:null}};

		case CHANGE_CITY:				return {...st,user:{...st.user,city:payload.id,city_name:payload.name},last_action:'change_city'};

		case LOG_OUT:
			AsyncStorage.setItem('user','');
			return ReducerRecord();

		// Запрос подтверждения телефона
		case PHONE_SEND_CODE_REQUEST:	return {...st,phone_send_code_state:{...st.phone_send_code_state,fetching:true}};
 		case PHONE_SEND_CODE_SUCCESS:	return {...st,phone_send_code_state:{fetching:false,success:true,	error:null},	last_action:'phone_send_code'};
		case PHONE_SEND_CODE_ERROR:		return {...st,phone_send_code_state:{fetching:false,success:false,	error},			last_action:'phone_send_code'};
		case PHONE_SEND_CODE_REMOVE:	return {...st,phone_send_code_state:{...st.phone_send_code_state,error:null}};

		// Подтверждение телефона
		case PHONE_CONFIRM_REQUEST:		return {...st,phone_confirm_state:{...st.phone_confirm_state,fetching:true}};
 		case PHONE_CONFIRM_SUCCESS:		return {...st,phone_confirm_state:{fetching:false,success:true,		error:null},	last_action:'phone_confirm'};
		case PHONE_CONFIRM_ERROR:		return {...st,phone_confirm_state:{fetching:false,success:false,	error},			last_action:'phone_confirm'};
		case PHONE_CONFIRM_REMOVE:		return {...st,phone_confirm_state:{...st.phone_confirm_state,error:null}};

		// Смена пароля
		case CHANGE_PASSWORD_REQUEST:	return {...st,change_password_state:{...st.change_password_state,fetching:true}};
 		case CHANGE_PASSWORD_SUCCESS:	return {...st,change_password_state:{fetching:false,success:true,	error:null},	last_action:'change_password'};
		case CHANGE_PASSWORD_ERROR:		return {...st,change_password_state:{fetching:false,success:false,	error},			last_action:'change_password'};
		case CHANGE_PASSWORD_REMOVE:	return {...st,change_password_state:{...st.change_password_state,error:null}};
	}

	return {...st};
}

// Действия
export const register							= (payload) => ({type:REGISTRATION_REQUEST,		payload});
export const authorize							= (payload) => ({type:AUTHORIZATION_REQUEST,	payload});
export const get_personal_data					= (payload) => ({type:GET_PERSONAL_REQUEST,		payload});
export const save_personal_data					= (payload) => ({type:SAVE_PERSONAL_REQUEST,	payload});
export const change_city						= (payload) => ({type:CHANGE_CITY,				payload});
export const log_out							= (payload) => ({type:LOG_OUT});
export const phone_send_code					= (payload) => ({type:PHONE_SEND_CODE_REQUEST,	payload});
export const phone_confirm						= (payload) => ({type:PHONE_CONFIRM_REQUEST,	payload});
export const change_password					= (payload) => ({type:CHANGE_PASSWORD_REQUEST,	payload});

export const remove_registration_error			= (payload) => ({type:REGISTRATION_REMOVE});
export const remove_authorization_error			= (payload) => ({type:AUTHORIZATION_REMOVE});
export const remove_get_personal_data_error		= (payload) => ({type:GET_PERSONAL_REMOVE});
export const remove_save_personal_data_error	= (payload) => ({type:SAVE_PERSONAL_REMOVE});
export const remove_phone_send_code_error		= (payload) => ({type:PHONE_SEND_CODE_REMOVE});
export const remove_phone_confirm_error			= (payload) => ({type:PHONE_CONFIRM_REMOVE});
export const remove_change_password_error		= (payload) => ({type:CHANGE_PASSWORD_REMOVE});

// Саги
export const register_saga			= function*({payload}) {
	payload.push_token = yield call(get_push_token);
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
	let {response,error} = yield call(API,'/UserDataEdit',{
		UserID:	payload.id,
		Name:	payload.name,
		MName:	payload.father,
		LName:	payload.family,
		Gender:	payload.gender,
		City:	payload.city,
	});
	if(response) {
		let user_data = JSON.parse(yield call(AsyncStorage.getItem,'user'));
		yield call(AsyncStorage.setItem,'user',JSON.stringify(Object.assign(user_data,payload)));
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
	let {response,error} = yield call(API,'/PhoneConfirm',{
		UserID:	payload.user_id,
		Code:	payload.code,
	});
	if(response) {
		yield put({type:PHONE_CONFIRM_SUCCESS});
	}
	if(error) {
		console.log('error',error);
		yield put({
			type: PHONE_CONFIRM_ERROR,
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
		takeLatest(PHONE_CONFIRM_REQUEST,	phone_confirm_saga),
		takeLatest(CHANGE_PASSWORD_REQUEST,	change_password_saga),
		takeLatest(GET_PERSONAL_REQUEST,	get_personal_saga),
		takeLatest(SAVE_PERSONAL_REQUEST,	save_personal_saga),
	]);
}
