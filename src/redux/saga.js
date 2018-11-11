import {all} from 'redux-saga/effects';

import {saga as promo_saga} from './reducers/promo';

// Главная сага, которая исполняет все остальные саги
export default function* root_saga() {
	yield all([
		promo_saga(),
	]);
}
