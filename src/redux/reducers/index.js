import {combineReducers} from 'redux';

import {initial} from '../initial';

// Акции
import promo_list,				{module as promo_list_module}				from './promo/list';
import promo_my,				{module as promo_my_module}					from './promo/my';
import promo_view,				{module as promo_view_module}				from './promo/view';

// Настройки
import settings,				{module as settings_module}					from './settings';
import settings_authorization,	{module as settings_authorization_module}	from './settings/authorization';
import settings_change_password,{module as settings_change_password_module}	from './settings/change_password';
import settings_confirm_phone,	{module as settings_confirm_phone_module}	from './settings/confirm_phone';
import settings_personal,		{module as settins_personal_module}			from './settings/personal';

export default combineReducers({
	// data: (state=initial) => state,
	[promo_list_module]:				promo_list,
	[promo_view_module]:				promo_view,
	[promo_my_module]:					promo_my,

	[settings_module]:					settings,
	[settings_authorization_module]:	settings_authorization,
	[settings_change_password_module]:	settings_change_password,
	[settings_confirm_phone_module]:	settings_confirm_phone,
	[settins_personal_module]:			settings_personal,
});
