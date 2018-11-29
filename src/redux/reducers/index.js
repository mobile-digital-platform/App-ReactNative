import {combineReducers} from 'redux';

import {initial} from '../initial';

import promo_list_reducer,	{module as promo_list_module}	from './promo/list';
import promo_view_reducer,	{module as promo_view_module}	from './promo/view';
import promo_my_reducer,	{module as promo_my_module}		from './promo/my';

export default combineReducers({
	// data: (state=initial) => state,
	[promo_list_module]:	promo_list_reducer,
	[promo_view_module]:	promo_view_reducer,
	[promo_my_module]:		promo_my_reducer,
});
