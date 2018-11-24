import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,Image,ScrollView,Text,TouchableOpacity,View} from 'react-native';

import ConfirmPhone		from '../../containers/settings/confirm_phone';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default class MainList extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Подтвердить телефон',
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
			fontSize: 20, fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	});

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<ConfirmPhone/>
			</View>
		);
	}
}
