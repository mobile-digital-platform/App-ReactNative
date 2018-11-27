import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon			from 'react-native-vector-icons/EvilIcons';

import Input		from '../../../templates/input';
import InputPhone	from '../../../templates/input_phone';

const styles = StyleSheet.create({
	title: {
		marginHorizontal: 20,
		color: '#bbb',
		fontSize: 12, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	main: {
		padding: 20,
	},
	main_text: {
		marginBottom: 20, marginHorizontal: 20,
		color: '#111',
		fontSize: 16,
		textAlign: 'center',
	},
	main_input: {
		// paddingVertical: 10,
	},
	button: {
		marginVertical: 10, padding: 15,
		borderRadius: 40,
		backgroundColor: 'red',
	},
	button_text: {
		color: '#fff',
		fontSize: 20, fontWeight: 'bold',
		textAlign: 'center',
	},
	button_disabled: {
		marginVertical: 10, padding: 15,
		borderRadius: 100,
		backgroundColor: '#f1f1f1',
	},
	button_disabled_text: {
		color: '#d5d5d5',
		fontSize: 20,
		textAlign: 'center',
	},
	reset: {
		paddingVertical: 20, paddingHorizontal: 20,
		borderTopWidth: 1, borderTopColor: '#ccc',
	},
	reset_button: {
		margin: 20, padding: 15,
		borderWidth: 1, borderColor: 'red',
		borderRadius: 40,
	},
	reset_button_text: {
		color: 'red',
		fontSize: 20,
		textAlign: 'center',
	},
});

export default class Authorization extends Component {
	state = {
		phone_value: '',
		phone_error: false,
		password_value: '123',
		password_error: 'Неверный пароль',
		ready: false,
	};

	set_phone = async (phone_value) => {
		await this.setState({phone_value});
		this.setState({ready:this.state.phone_value.length && this.state.password_value.length});
	}
	set_password = async (password_value) => {
		await this.setState({password_value});
		this.setState({ready:this.state.phone_value.length && this.state.password_value.length});
	}

	render() {
		let state = this.state;
		console.log(state);
		return (
			<View>
				<View style={styles.main}>
					<Text style={styles.main_text}>Для авторизации введите номер телефона и пароль, указанные при регистрации.</Text>
					<View style={styles.main_input}><InputPhone title="Мобильный телефон" value={state.phone_value} error={state.phone_error} send={this.set_phone} /></View>
					<View style={styles.main_input}><Input title="Пароль" password={true} value={state.password_value} error={state.password_error} send={this.set_password} /></View>
					<TouchableOpacity style={state.ready ? styles.button : styles.button_disabled}>
						<Text style={state.ready ? styles.button_text : styles.button_disabled_text}>Войти</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.reset}>
					<Text style={styles.title}>Я забыл пароль</Text>
					<TouchableOpacity style={styles.reset_button}>
						<Text style={styles.reset_button_text}>Восстановить пароль</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
