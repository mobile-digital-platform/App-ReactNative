import React,{Component} from 'react';
import {Platform,StatusBar,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

import {light,dark}		from '../../../navigation';

import Settings_Button	from '../../../containers/settings_button';
import Tabs				from '../../../containers/main_tabs';

import Promo_List		from '../../../containers/promo/list';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: '#fff',
	},
});

export default class MyList extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Мои акции',
		headerRight: (<Settings_Button navigation={navigation} />),
		...dark,
	});

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<Tabs/>
				<Promo_List my={true}/>
			</View>
		);
	}
}
