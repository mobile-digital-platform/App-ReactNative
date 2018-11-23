import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from './comp/Input';
import Button1 from './comp/Button1';
import Button2 from './comp/Button2';
import Select from './comp/Select';
import IconText from './comp/IconText';
import Banner from './comp/Banner';
import Line from './comp/Line';

const styles = StyleSheet.create({
	container: {
		paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,
	},
	title: {
		color: '#b3b3b3',
		fontSize: 15,
		marginBottom: 10,
	},
	text: {
		color: '#494949',
		fontSize: 15,
		lineHeight: 20,
	},
});

export default class PromoView extends Component {
	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('promo',{title:'Акция'}).title,
		headerRight: (
			<TouchableOpacity style={{padding:15,paddingRight:0,}} onPress={_ => navigation.push('settings')}>
				<Icon name="gear" style={{marginRight:10,color:'#000'}} size={40} />
			</TouchableOpacity>
		),
	});
	render() {
		return (
			<View>
				<Banner />
				<View style={styles.container}>
					<Text style={styles.title}>Условия акции</Text>
					<Text style={styles.text}>Renders the native picker component on iOS and Android. Example: Renders the native picker component on iOS and Android. Example:</Text>
					<Text style={styles.title}>Где проводится</Text>
				</View>
				<Line />
			</View>
		)
	}
}
