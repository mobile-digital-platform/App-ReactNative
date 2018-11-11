import {all} from 'redux-saga/effects';

import {saga as promo_list_saga} from './reducers/promo/list';
import {saga as promo_view_saga} from './reducers/promo/view';

// Главная сага, которая исполняет все остальные саги
export default function* root_saga() {
	yield all([
		promo_list_saga(),
		promo_view_saga(),
	]);
}
