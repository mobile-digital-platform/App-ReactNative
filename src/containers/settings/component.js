import React,{Component} from 'react';
import {Alert,AsyncStorage,StyleSheet,ScrollView,TouchableOpacity,View,Text} from 'react-native';
import {withNavigation} from 'react-navigation';

import Personal		from './personal';
import Profile		from './profile';
import LoyaltyCards	from './loyalty_cards';
import About		from './about';

export default withNavigation(class SettingsComponent extends Component {
	state = {
		personal_data: null,
	};

	async componentDidMount() {
		let personal_data = JSON.parse(await AsyncStorage.getItem('user'));
		console.log("personal_data",personal_data);

		// Если он авторизовался, то получаем данные с сервера
		if(personal_data) {
			await this.setState({personal_data});
			this.props.get_personal_data(this.state.personal_data.id);
		}
	}

	componentDidUpdate(prev_props) {
		if(!Object.is(this.props,prev_props)) {
			if(this.props.last_action == 'registration') {
				if(this.props.registration_state.error) {
					Alert.alert(this.props.registration_state.error.message);
					this.props.remove_registration_error();
				} else {
					Alert.alert('Поздравляем, вы успешно зарегистрировались','Подтвердите свой номер телефона');
					this.props.navigation.push('settings_confirm_phone');
				}
			}
			if(this.props.last_action == 'get_personal_data') {
				if(this.props.get_personal_data_state.error) {
					Alert.alert(this.props.get_personal_data_state.error.message);
					this.props.remove_get_personal_data_error();
				}
			}
			if(this.props.last_action == 'save_personal_data') {
				if(this.props.save_personal_data_state.error) {
					Alert.alert(this.props.save_personal_data_state.error.message);
					this.props.remove_save_personal_data_error();
				}
			}
			if(this.props.last_action == 'change_city') {
				this.setState({personal_data:this.props.user});
			}
		}
	}

	save_personal_data = async (data) => {
		// Если он уже вошел, то сохраняем, иначе регистрируем
		if(this.state.personal_data) {
			await this.setState({...data});
			this.props.save_personal_data(this.state.personal_data);
		} else {
			this.props.register(data);
		}
	}

	render() {
		// console.log("Settings Component",this.props);

		return (
			<View>
				<Personal		{...this.props} state={this.state} send_data={this.save_personal_data} />
				<Profile		{...this.props} state={this.state} log_out={this.props.log_out} />
				<LoyaltyCards	{...this.props} state={this.state} />
				<About			{...this.props} state={this.state} />
			</View>
		);
	}
});
