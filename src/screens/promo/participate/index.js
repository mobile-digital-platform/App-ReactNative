import React,{Component}	from 'react';
import {StyleSheet,View}	from 'react-native';

import Settings_Button		from '../../../containers/settings_button';
import Tabs					from '../../../containers/main_tabs';

import Promo_Participate	from '../../../containers/promo/participate';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default class PromoView extends Component {
	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('promo',{title:'Принять участие'}).title,
		headerRight: (<Settings_Button navigation={navigation} />),
	});

	render() {
		return (
			<View style={styles.container}>
				<Promo_Participate/>
			</View>
		);
	}
}
