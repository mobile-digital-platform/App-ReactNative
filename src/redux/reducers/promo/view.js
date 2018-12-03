import {all,call,put,select,takeEvery,takeLatest} from 'redux-saga/effects';

import config	from '../../../config';
import API		from '../../../services/api';

export const ReducerRecord = () => ({
	data: false,
	error: null,
	initialed: false,
	loading: false,
	loaded: false,
});

// Постоянные
export const module = 'promo_view';

export const REQUEST		= config.name+'/'+module+'/REQUEST';
export const SUCCESS		= config.name+'/'+module+'/SUCCESS';
export const ERROR			= config.name+'/'+module+'/ERROR';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	if(type == REQUEST) {
		return {...st,loading:true};

	} else if(type == SUCCESS) {
		return {
			...st,
			loading: false,
			loaded: true,
			data: payload.data,
			error: null,
		};

	} else if(type == ERROR) {
		return {
			...st,
			loading: false,
			error,
		};
	}

	return {...st};
}

// Действие
export function get_data(payload) {
	return {
		type: REQUEST,
		payload,
	};
}

// Сага
export const fetch_data_saga = function*({payload}) {
	try {
		let data = {
			id: payload.id,
			title: 'Акция '+Math.ceil(Math.random()*100),
			ending: Math.ceil(Math.random()*20),
			description: 'Описание условий акции описание условий акции описание условий акции описание условий акции',
			retailer: [
				{
					id: 1,
					name: 'Ашан',
					link: 'ссылка на промо сайт',
				},
				{
					id: 2,
					name: 'Пятерочка',
					link: 'ссылка на промо сайт',
				},
			],
		};

		yield put({
			type: SUCCESS,
			payload: {
				...payload,
				data,
			},
		});
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
