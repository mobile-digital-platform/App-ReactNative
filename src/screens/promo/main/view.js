import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

import Settings_Button	from '../../../containers/settings_button';
import Tabs				from '../../../containers/main_tabs';

import Promo_View	from '../../../containers/promo/view';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default class PromoView extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Об акции',
		headerStyle: {
			height: 70,
			backgroundColor: '#ee0007',
		},
		headerBackTitle: ' ',
		headerLeftContainerStyle: {
			padding: 10,
		},
		headerTitleStyle: {
			color: '#fff',
			fontSize: 22, fontWeight: 'bold',
			textTransform: 'uppercase',
		},
		headerRight: (<Settings_Button navigation={navigation} styles={{color:'#fff'}} />),
	});

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Promo_View/>
			</View>
		);
	}
}
