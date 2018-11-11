import {combineReducers} from 'redux';

import {initial} from '../initial';

import promo_reducer,{module as promo_module} from './promo';

export default combineReducers({
	// data: (state=initial) => state,
	[promo_module]: promo_reducer,
});
