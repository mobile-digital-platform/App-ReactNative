import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Promo_View	from '../../../containers/promo/view';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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
			<View style={styles.container}>
				<Promo_View/>
			</View>
		);
	}
}
