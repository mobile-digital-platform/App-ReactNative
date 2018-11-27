import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';

import Input		from '../../templates/input';
import InputPhone	from '../../templates/input_phone';
import Textarea		from '../../templates/textarea';
import Select		from '../../templates/select';

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	block: {
		paddingVertical: 10,
	},
	title: {
		paddingBottom: 10, paddingHorizontal: 25,
		color: '#bbb',
		fontSize: 14, fontWeight: 'bold',
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

export default class Personal extends Component {
	state = {
		phone:		'+7 909 000 00 00',
		mail:		'marina@marina.ma',
		name:		'Марина',
		father:		'Андреевна',
		family:		'',
		city:		0,
		address:	'Комсомольск-на-Амуре, ул. Луговая, д. 32, кв. 12',
	};

	send = () => {

	}

	render() {
		let state = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.block}>
					<Text style={styles.title}>Персональные данные</Text>
					<Input title="Имя"		value={state.name}		send={value => this.setState({name:value})} />
					<Input title="Отчество"	value={state.father}	send={value => this.setState({father:value})} />
					<Input title="Фамилия"	value={state.family}	send={value => this.setState({family:value})} />
					<Select title="Город"	value={state.city}		send={value => this.setState({city:value})} />
				</View>
				<View style={styles.block}>
					<Text style={styles.title}>Адрес регистрации</Text>
					<Textarea value={state.address} send={value => this.setState({address:value})} />
				</View>
				<View style={styles.block}>
					<Text style={styles.title}>Контакты</Text>
					<InputPhone title="Мобильный телефон" value={state.phone} need_confirm={true} send={value => this.setState({phone:value})} />
					<Input title="E-mail" value={state.mail} send={value => this.setState({mail:value})} />
				</View>
				<TouchableOpacity style={styles.save} onPress={this.send}><Text style={styles.save_text}>Сохранить</Text></TouchableOpacity>
			</View>
		);
	}
}
