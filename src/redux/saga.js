import {all} from 'redux-saga/effects';

// Акции
import {saga as promo_list}			from './reducers/promo/list';
import {saga as promo_view}			from './reducers/promo/view';
import {saga as promo_my}			from './reducers/promo/my';

// Настройки
import {saga as settings_personal}	from './reducers/settings/personal';

// Главная сага, которая исполняет все остальные саги
export default function* root_saga() {
	yield all([
		promo_list(),
		promo_view(),
		promo_my(),
		settings_personal(),
	]);
}
