import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from './comp/Input';
import Button1 from './comp/Button1';
import Button2 from './comp/Button2';
import Select from './comp/Select';

const styles = StyleSheet.create({
	container1: {
		backgroundColor: 'white',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
	container2: {
		backgroundColor: 'white',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
		borderTopColor: '#ccc', 
		borderTopWidth: 1
	},
	title: {
		color: '#b3b3b3',
		fontSize: 15,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 10
	},
	text: {
		color: '#494949',
		fontSize: 15,
		lineHeight: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 40,
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
					<View style={styles.container1}>
						<Input placeholder="Новый пароль" style={{ marginBottom: 15 }}/>					
						<Text style={[styles.text]}>На ваш телефон отправлено SMS-сообщение с кодом подтверждения. Введите этот код в поле</Text>
						<Text style={[styles.title]}>Подтвердите смену текущим паролем</Text>
						<Input placeholder="Текущий пароль"  style={{ marginBottom: 20 }} />
						<Button1 value="Сохранить" />
					</View>
					<View style={styles.container2}>
						<Text style={[styles.text, {textAlign: 'center', paddingBottom: 20}]}>Я  забыл пароль</Text>
						<Button2 value="Восстановить пароль"/>
					</View>
				</View>
		)
	}
}
