import React,{Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from '../../../templates/input';

const styles = StyleSheet.create({
	main: {
		padding: 20,
	},
	main_text: {
		fontSize: 16,
		textAlign: 'center',
	},
	main_input: {
		paddingVertical: 15,
	},
	main_button: {
		marginBottom: 10, padding: 15,
		borderRadius: 40,
		backgroundColor: 'red',
	},
	main_button_text: {
		color: '#fff',
		fontSize: 20, fontWeight: 'bold',
		textAlign: 'center',
	},
	again: {
		paddingVertical: 20, paddingHorizontal: 40,
		borderTopWidth: 1, borderTopColor: '#ccc',
	},
	again_title: {
		color: '#bbb',
		fontSize: 14, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	again_wait: {
		paddingVertical: 10,
		color: 'red',
	},
	again_button: {
		marginVertical: 10, padding: 15,
		borderRadius: 100,
		backgroundColor: '#f1f1f1',
	},
	again_button_text: {
		color: '#d5d5d5',
		fontSize: 20,
		textAlign: 'center',
	}
});

export default class ConfirmPhoneComponent extends Component {
	state = {
		code: '',
	}

	componentDidMount() {
		this.props.phone_send_code({user_id:this.props.user.id});
	}

	send = () => {
		if(this.state.code.length) this.props.phone_confirm({user_id:this.props.user.id,code:this.state.code});
	}

	render() {
		let state = this.state;
		// console.log("ConfirmPhoneComponent",this.props,this.state);

		return (
			<View>
				<View style={styles.main}>
					<Text style={styles.main_text}>На ваш телефон отправлено SMS-сообщение с кодом подтверждения. Введите этот код в поле:</Text>
					<View style={styles.main_input}><Input title="Код из SMS" value={state.code} send={code => this.setState({code})} /></View>
					<TouchableOpacity style={styles.main_button} onPress={this.send}>
						<Text style={styles.main_button_text}>Подтвердить</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.again}>
					<Text style={styles.again_title}>Я не получил SMS-сообщение</Text>
					<Text style={styles.again_wait}>Отправить код повторно можно через 55 сек.</Text>
					<TouchableOpacity style={styles.again_button}>
						<Text style={styles.again_button_text}>Подтвердить</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
