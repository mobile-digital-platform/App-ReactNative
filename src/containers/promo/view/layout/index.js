import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#eee',
	},
	image: {
		justifyContent: 'center', alignItems: 'center',
		height: 80, width: '100%',
		backgroundColor: '#eee',
	},
	area: {
		padding: 10,
	},
	title: {
		marginBottom: 5,
		fontSize: 24,
	},
	ending: {
		fontSize: 14,
	},
	description: {
		fontSize: 14,
	},
});

export default withNavigation(({navigation,data}) => (
	<View style={styles.container}>
		<View style={styles.image}><Text>Баннер</Text></View>
		<View style={styles.area}>
			<Text style={styles.title}>{data.title}</Text>
			<Text style={styles.ending}>Заканчивается через {data.ending} дней</Text>
			<Text style={styles.description}>{data.description}</Text>
		</View>
		<View style={styles.area}>
		</View>
	</View>
));
