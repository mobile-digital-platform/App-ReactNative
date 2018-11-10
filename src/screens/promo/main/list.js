import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Tabs from '../tabs';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
	},
});

export default class Onboarding extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Акции',
		headerRight: (
			<TouchableOpacity style={{padding:15,paddingRight:0,}} onPress={_ => navigation.push('settings')}>
				<Icon name="gear" style={{marginRight:10,color:'#000'}} size={40} />
			</TouchableOpacity>
		),
	});

	render() {
		return (
			<View style={styles.container}>
				<Tabs/>
			</View>
		);
	}
}
