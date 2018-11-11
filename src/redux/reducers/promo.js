import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config from '../../config';

export const ReducerRecord = () => ({
	data: [],
	error: null,
	initialed: false,
	loading: false,
	loaded: false,
});

// Постоянные
export const module = 'promo_list';

export const FETCH_DATA_REQUEST	= config.name+'/'+module+'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS	= config.name+'/'+module+'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR	= config.name+'/'+module+'FETCH_DATA_ERROR';

/*
Потом надо будет разделить на загрузку следующих и загрузку новых
*/

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	if(type == FETCH_DATA_REQUEST) {
		return {...st,loading:true};

	} else if(type == FETCH_DATA_SUCCESS) {
		let data = [...st.data,...payload];
		data.forEach((e,i) => e.id = i);
		return {
			...st,
			loading: false,
			loaded: true,
			data,
			error: null,
		};

	} else if(type == FETCH_DATA_ERROR) {
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
export function fetch_data() {
	return {
		type: FETCH_DATA_REQUEST,
		payload: {},
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
		*/

		let data = [];
		for(let i=0; i<10; i++) data.push({
			title: 'Акция '+Math.ceil(Math.random()*10*(i+1)),
			ending: Math.ceil(Math.random()*20),
		});

		yield put({
			type: FETCH_DATA_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log('error',error);
		yield put({
			type: FETCH_DATA_ERROR,
			error,
		});
	}
};

export const saga = function*() {
  yield all([
    takeEvery(FETCH_DATA_REQUEST,fetch_data_saga),
  ]);
};
