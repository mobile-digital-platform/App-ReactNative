import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,Image,ScrollView,Text,TouchableOpacity,View} from 'react-native';

import Personal		from '../../containers/settings/personal';
import Profile		from '../../containers/settings/profile';
import LoyaltyCards	from '../../containers/settings/loyalty_cards';
import About		from '../../containers/settings/about';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
	},
});

export default class MainList extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Настройки',
		headerStyle: {
			height: 70,
			backgroundColor: '#ee0007',
		},
		headerBackTitle: ' ',
		headerLeftContainerStyle: {
			padding: 10,
		},
		headerTitleStyle: {
			color: '#fff',
			fontSize: 22, fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	});

	render() {
		return (
			<ScrollView style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Personal/>
				<Profile/>
				<LoyaltyCards/>
				<About/>
			</ScrollView>
		);
	}
}
