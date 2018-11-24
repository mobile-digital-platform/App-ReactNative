import React					from 'react';
import {StatusBar}				from 'react-native';
import {createStackNavigator}	from 'react-navigation';
import {Provider}				from 'react-redux';

import OnboardingScreen			from './screens/onboarding';
import PromoListScreen			from './screens/promo/main/list';
import PromoViewScreen			from './screens/promo/main/view';
import PromoParticipateScreen	from './screens/promo/participate';
import PromoMyListScreen		from './screens/promo/my/list';
import PromoMyViewScreen		from './screens/promo/my/view';
import SettingsScreen			from './screens/settings/main';

import store					from './redux';

StatusBar.setBarStyle('dark-content',true);

const Root = createStackNavigator(
	{
		onboarding:			OnboardingScreen,
		promo_list:			PromoListScreen,
		promo_view:			PromoViewScreen,
		promo_participate:	PromoParticipateScreen,
		promo_my_list:		PromoMyListScreen,
		promo_my_view:		PromoMyViewScreen,
		settings:			SettingsScreen,
	},
	{
		// initialRouteName: 'onboarding',
		// initialRouteName: 'promo_list',
		// initialRouteName: 'promo_view',
		// initialRouteName: 'promo_my_list',
		// initialRouteName: 'promo_my_view',
		initialRouteName: 'settings',

		navigationOptions: {
			headerStyle: {
				height: 70,
			},
			headerBackTitle: ' ',
			headerLeftContainerStyle: {
				padding: 10,
			},
			headerTitleStyle: {
				color: '#000',
				fontSize: 22, fontWeight: 'bold',
				textTransform: 'uppercase',
			},
		},
	}
);

export default () => <Provider store={store}><Root/></Provider>
