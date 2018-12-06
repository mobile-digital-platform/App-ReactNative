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

	componentDidUpdate() {
		if(this.props.error) {
			Alert.alert(this.props.error.message);
			this.props.remove_error();
		}
	}

	save_personal_data = (data) => {
		if(this.state.data)	this.props.save_personal_data(data);
		else				this.props.register(data);
	}

	render() {
		console.log("Settings Component",this.props.data);

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
