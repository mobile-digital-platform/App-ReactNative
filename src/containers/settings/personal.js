import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';

import Input		from './templates/input';
import Textarea		from './templates/textarea';
import Select		from './templates/select';

import InputPhone	from './templates/input_phone';

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	block: {
		paddingVertical: 10,
	},
	title: {
		padding: 10, paddingHorizontal: 20,
		color: '#bbb',
		fontSize: 16, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	save: {
		marginTop: 10, padding: 15,
		borderRadius: 100,
		backgroundColor: 'red',
	},
	save_text: {
		color: '#fff',
		fontSize: 24,
		textAlign: 'center',
	},
});

export default () => (
	<View style={styles.container}>
		<View style={styles.block}>
			<Text style={styles.title}>Персональные данные</Text>
			<Input title="Имя" />
			<Input title="Отчество" />
			<Input title="Фамилия" />
			<Select title="Город" />
		</View>
		<View style={styles.block}>
			<Text style={styles.title}>Адрес регистрации</Text>
			<Textarea/>
		</View>
		<View style={styles.block}>
			<Text style={styles.title}>Контакты</Text>
			<InputPhone title="Мобильный телефон" need_confirm={true} />
			<Input title="E-mail" />
		</View>
		<TouchableOpacity style={styles.save}><Text style={styles.save_text}>Сохранить</Text></TouchableOpacity>
	</View>
);
