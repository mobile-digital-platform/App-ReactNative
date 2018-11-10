import React,{Component} from 'react';
import {Platform,StyleSheet,TouchableOpacity,Text,View,Image} from 'react-native';

export default class Onboarding extends Component {
	static navigationOptions = {title:'Мобильная цифровая платформа',headerTitleStyle:{fontSize:20}};

	render() {
		return (
			<TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={_=>this.props.navigation.replace('promo_list')}>
				<Text style={{fontSize:36}}>Начать</Text>
			</TouchableOpacity>
		);
	}
}
