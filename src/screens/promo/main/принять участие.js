import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from './comp/Input';
import Button1 from './comp/Button1';
import Button2 from './comp/Button2';
import Select from './comp/Select';
import Banner from './comp/Banner';


const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 20,
		paddingRight: 20,
	},
	card: {
		backgroundColor: '#f1f1f1',
		borderRadius: 20,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 10,
		marginBottom: 10,
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
				<ScrollView>
					<Banner />
					<View style={{padding: 20}}>
						<Text style={styles.text}>Если у вас уже есть учетная запись, авторизуйтесь, и все ваши данные будут заполнены автоматически,</Text>
						<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
							<Text style={styles.title}>Условия акции</Text>
							<Icon name="chevron-right" size={10} />
						</TouchableOpacity>
					</View>
					<View style={styles.container}>
							<View>
								<Input placeholder="Имя" />
								<Input placeholder="Фамилия" />
								<Input placeholder="Мобильный телефон" style={{ marginBottom: 30}}/>
								<Input placeholder="E-mail" />
								<Input placeholder="E-mail" />
								<Select />
							</View>
							<View style={styles.card}>
								<Text style={styles.title}>Карта лояльности</Text>
								<Text style={styles.text}>Если у вас есть карта лояльности, то покупки по ней будут автоматически участвовать в акции.
								</Text>
								<Input placeholder="Номер карты лояльности"  style={{marginTop: 20}}/>
							</View>
							<View>
								<Text style={[styles.text, {padding: 15}]}>Кликая на «Я участвую!»‚ Вы cоглашаетесь с политикой безопасности и конфиденциальности и подтверждаете, что согласны с правилами акции.
								</Text>
								<Button1 value="Я участвую!" />
							</View>
					</View>
				</ScrollView>
		)
	}
}
