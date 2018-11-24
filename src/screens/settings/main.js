import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
	},
});

export default class MainList extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Настройки',
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
	});

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
			</View>
		);
	}
}
