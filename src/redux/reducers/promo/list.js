import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config	from '../../../config';
import API		from '../../../services/api';

export const ReducerRecord = () => ({
	data: [],
	error: null,
	initialed: false,
	loading: false,
	loaded: false,
});

// Постоянные
export const module = 'promo_list';

export const REQUEST		= config.name+'/'+module+'/REQUEST';
export const SUCCESS		= config.name+'/'+module+'/SUCCESS';
export const ERROR			= config.name+'/'+module+'/ERROR';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;
	console.log(type,payload,error);

	if(type == REQUEST) {
		return {...st,loading:true};

	} else if(type == SUCCESS) {
		let data = [];
		if(payload.next)		data = [...st.data,...payload.data];
		else if(payload.new)	data = [...payload.data,...st.data];
		data.forEach((e,i) => e.id = i);
		return {
			...st,
			loading: false,
			loaded: true,
			data,
			error: null,
		};

	} else if(type == ERROR) {
		return {
			...st,
			loading: false,
			error,
		};
		// st.loaded = false;
	}

	return {...st};
}

// Действие
export function list_data(payload) {
	return {
		type: REQUEST,
		payload,
	};
}

// Сага
export const fetch_data_saga = function*({payload}) {
	try {
		/*
		let res = yield fetch('http://comtrud.ru/api/v2/work/recent',{
			method: 'POST',
			mode: 'no-cors',
			crossDomain: true,
			headers: {
				'Accept':		'application/json',
				'Content-Type':	'application/json',
			},
			data: {},
		});
		if(res.status == 200) {
			var data = yield res.json();
		} else {
			throw("Сервер полоникса не отвечает");
		}
		yield new Promise((resolve) => setTimeout(resolve,1000));
		*/

		let data = [];
		for(let i=0; i<10; i++) data.push({
			title: 'Акция '+Math.ceil(Math.random()*10*(i+1)),
			ending: Math.ceil(Math.random()*20),
		});
		// let data = yield call(API('/PromoGroupList'));

		yield put({
			type: SUCCESS,
			payload: {
				...payload,
				data,
			},
		});
		console.log(data);
	} catch (error) {
		console.log('error',error);
		yield put({
			type: ERROR,
			error,
		});
	}
};

export const saga = function*() {
	yield all([
		takeEvery(REQUEST,fetch_data_saga),
	]);
};
