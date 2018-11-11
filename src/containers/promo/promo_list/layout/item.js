import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center', alignItems: 'center',
		minHeight: 100,
		marginHorizontal: 10, padding: 10,
		// backgroundColor: '#eee',
	},
	title: {
		marginBottom: 5,
		fontSize: 24,
	},
	ending: {
		fontSize: 14,
	},
});

export default withNavigation((props) => (
	<TouchableOpacity style={styles.container} onPress={_ => props.navigation.push('promo_view')}>
		<Text style={styles.title}>Название акции</Text>
		<Text style={styles.ending}>Заканчивается через 12 дней</Text>
	</TouchableOpacity>
));
