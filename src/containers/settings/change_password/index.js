import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from '../templates/input';

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
		marginBottom: 30, marginHorizontal: 20,
		color: '#111',
		fontSize: 16,
	},
	main_input: {
		paddingVertical: 10,
	},
	button: {
		marginBottom: 10, padding: 15,
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

export default (props) =>  (
	<View>
		<View style={styles.main}>
			<View style={styles.main_input}><Input title="Новый пароль" /></View>
			<Text style={styles.main_text}>
				Пароль должен иметь длину не менее 6 знаков.
				Рекомендуется, чтобы пароль состоял из строчных и заглавных букв, содержал цифры и специальные символы (-!@#$%).
			</Text>
			<Text style={styles.title}>Подтвердите смену текущим паролем</Text>
			<View style={styles.main_input}><Input title="Текущий пароль" /></View>
			<TouchableOpacity style={styles.button_disabled}>
				<Text style={styles.button_disabled_text}>Сохранить</Text>
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
