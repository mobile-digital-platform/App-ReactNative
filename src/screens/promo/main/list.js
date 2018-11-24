import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

import Settings_Button	from '../../../containers/settings_button';
import Tabs				from '../../../containers/main_tabs';

import Promo_List	from '../../../containers/promo/list';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: '#fff',
	},
});

export default class MainList extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Акции',
		headerRight: (<Settings_Button navigation={navigation} />),
	});

	render() {
		return (
			<View style={styles.container}>
				<Tabs/>
				<Promo_List my={false}/>
			</View>
		);
	}
}
