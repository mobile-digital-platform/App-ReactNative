import {combineReducers} from 'redux';

import {initial} from '../initial';

// Акции
import promo_list,		{module as promo_list_module}		from './promo/list';
import promo_view,		{module as promo_view_module}		from './promo/view';
import promo_my,		{module as promo_my_module}			from './promo/my';

// Настройки
import settins_personal,{module as settins_personal_module}	from './settings/personal';

export default combineReducers({
	// data: (state=initial) => state,
	[promo_list_module]:		promo_list,
	[promo_view_module]:		promo_view,
	[promo_my_module]:			promo_my,

	[settins_personal_module]:	settins_personal,
});
