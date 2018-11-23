import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center', alignItems: 'center',
		marginHorizontal: 10, padding: 10,
		// backgroundColor: '#eee',
	},
	image: {
		justifyContent: 'center', alignItems: 'center',
		height: 80, width: '100%',
		backgroundColor: '#eee',
	},
	title: {
		marginVertical: 5,
		fontSize: 24,
	},
	ending: {
		fontSize: 14,
	},
});

export default withNavigation(({navigation,data}) => (
	<TouchableOpacity style={styles.container} onPress={_ => navigation.push('promo_view')}>
		<View style={styles.image}><Text>Баннер</Text></View>
		<Text style={styles.title}>{data.title}</Text>
		<Text style={styles.ending}>ФФФФФЗаканчивается через {data.ending} дней</Text>
	</TouchableOpacity>
));
