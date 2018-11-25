import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,View} from 'react-native';

import {light,dark}		from '../../navigation';

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
		...light,
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
