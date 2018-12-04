import React						from 'react';
import {StatusBar}					from 'react-native';
import {createStackNavigator}		from 'react-navigation';
import {Provider}					from 'react-redux';

import OnboardingScreen				from './screens/onboarding';

import PromoListScreen				from './screens/promo/main/list';
import PromoViewScreen				from './screens/promo/main/view';
import PromoParticipateScreen		from './screens/promo/participate';

import PromoMyListScreen			from './screens/promo/my/list';
import PromoMyViewScreen			from './screens/promo/my/view';

import SettingsScreen				from './screens/settings/main';
import ConfirmPhoneScreen			from './screens/settings/confirm_phone';
import AuthorizationScreen			from './screens/settings/authorization';
import ChangePasswordScreen			from './screens/settings/change_password';
import ChangeCityScreen				from './screens/settings/change_city';
import SettingsAddLoyaltyCardScreen	from './screens/settings/add_loyalty_card';

import WebScreen					from './screens/web';

import store						from './redux';

StatusBar.setBarStyle('dark-content',true);

const Root = createStackNavigator(
	{
		onboarding:					OnboardingScreen,
		promo_list:					PromoListScreen,
		promo_view:					PromoViewScreen,
		promo_participate:			PromoParticipateScreen,
		promo_my_list:				PromoMyListScreen,
		promo_my_view:				PromoMyViewScreen,
		settings:					SettingsScreen,
		settings_confirm_phone:		ConfirmPhoneScreen,
		settings_authorization:		AuthorizationScreen,
		settings_change_password:	ChangePasswordScreen,
		settings_change_city:		ChangeCityScreen,
		settings_add_loyalty_card:	SettingsAddLoyaltyCardScreen,
		web:						WebScreen,
	},
	{
		// initialRouteName: 'onboarding',
		// initialRouteName: 'promo_list',
		// initialRouteName: 'promo_view',
		// initialRouteName: 'promo_participate',
		// initialRouteName: 'promo_my_list',
		// initialRouteName: 'promo_my_view',
		initialRouteName: 'settings',
		// initialRouteName: 'settings_confirm_phone',
		// initialRouteName: 'settings_authorization',
		// initialRouteName: 'settings_change_password',
		// initialRouteName: 'settings_change_city',
		// initialRouteName: 'settings_add_loyalty_card',
		// initialRouteName: 'web',
	}
);

export default () => <Provider store={store}><Root/></Provider>
