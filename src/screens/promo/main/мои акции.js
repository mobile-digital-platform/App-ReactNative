import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from './comp/Input';
import Button1 from './comp/Button1';
import Button2 from './comp/Button2';
import Select from './comp/Select';
import IconText from './comp/IconText';
import Banner from './comp/Banner';

const styles = StyleSheet.create({
	container1: {
		backgroundColor: 'white',
		paddingTop: 40,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
	container2: {
		backgroundColor: 'white',
		paddingTop: 15,
		paddingBottom: 25,
		paddingLeft: 40,
		paddingRight: 40,
		borderTopColor: '#ccc', 
		borderTopWidth: 1
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
		marginBottom: 20,
		marginRight: 'auto',
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

	//
	render() {
		return (
				<ScrollView>
				<View>
					<Banner />
					<View style={styles.container1}>
						<Text style={[styles.text, {textAlign: 'center'}]}>Пока у вас нет ни одной покупки по акции.</Text>
						<Text style={[styles.text, {textAlign: 'center'}]}>Если вы зарегистрировали карту лояльности магазина, и использовали ее при покупке. данные добавятся автоматически</Text>
						<Text style={[styles.text, {textAlign: 'center'}]}>Если карты лояльности нет, вы можете вручную добавить кассовый чек, нажав кнопку «добавить».</Text>
					</View>
					<View style={styles.container2}>
						<Button1 value="Добавить чек" style={{marginBottom: 25 }}/>
						<Button2 value="Получить выигрыш" style={{marginBottom: 25 }} />
						<IconText text="Задать вопрос" icon="comment" />
					</View>
				</View>
				</ScrollView>
		)
	}
}
