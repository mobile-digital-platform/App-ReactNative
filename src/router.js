import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import OnboardingScreen		from './screens/onboarding';
import PromoListScreen		from './screens/promo/main/list';
import PromoViewScreen		from './screens/promo/main/view';
import PromoMyListScreen	from './screens/promo/my/list';
import PromoMyViewScreen	from './screens/promo/my/view';
import SettingsScreen		from './screens/settings/main';

StatusBar.setBarStyle('dark-content',true);

const Root = createStackNavigator(
	{
		onboarding:			OnboardingScreen,
		promo_list:			PromoListScreen,
		promo_view:			PromoViewScreen,
		promo_my_list:		PromoMyListScreen,
		promo_my_view:		PromoMyViewScreen,
		settings:			SettingsScreen,
	},
	{
		// initialRouteName: 'onboarding',
		initialRouteName: 'promo_list',
		// initialRouteName: 'promo_view',
		// initialRouteName: 'promo_my_list',
		// initialRouteName: 'promo_my_view',
		// initialRouteName: 'settings',

		navigationOptions: {
			headerStyle: {
				height: 70,
				// backgroundColor: '#2c6c8c',
				borderBottomWidth: 1,
			},
			// headerTintColor: '#fff',
			headerBackTitle: ' ',
			headerLeftContainerStyle: {
				padding: 10,
				// backgroundColor: '#ddd',
			},
			headerTitleStyle: {
				// color: '#fff',
				fontSize: 28,
			},
		},
	}
);

export default () => <Root/>
