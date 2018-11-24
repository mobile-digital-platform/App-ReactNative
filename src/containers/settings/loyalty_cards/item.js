import React from 'react';
import {StyleSheet,ImageBackground,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingVertical: 15,
	},
	image: {
		height: 50, width: 50,
		borderRadius: 50,
		backgroundColor: '#ddd',
	},
	area: {
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: 10,
		// backgroundColor: '#ddd',
	},
	title: {
		fontSize: 16,
	},
	about: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	number: {
		marginBottom: 3,
		fontSize: 16, fontWeight: 'bold',
	},
	remove: {
		color: '#ee0007',
		fontSize: 16,
	},
});

export default withNavigation(({navigation,data}) => (
	<TouchableOpacity style={styles.container} onPress={_ => navigation.push('promo_participate')}>
		<View style={styles.image}></View>
		<View style={styles.area}>
			<Text style={styles.title}>{data.retailer.name}</Text>
			<View style={styles.about}>
				<Text style={styles.number}>{data.number}</Text>
				<Text style={styles.remove}><Icon name="close" style={{color:'red'}} size={30} /></Text>
			</View>
		</View>
	</TouchableOpacity>
));
