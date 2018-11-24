import React from 'react';
import {StyleSheet,ImageBackground,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		padding: 20,
	},
	image: {
		height: 50, width: 50,
		borderRadius: 50,
		backgroundColor: '#ddd',
	},
	area: {
		flex: 1,
		marginLeft: 20,
		// backgroundColor: '#eee',
	},
	title: {
		fontSize: 20, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	about: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	link_area: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	link: {
		marginBottom: 5,
		fontSize: 16,
	},
	participate: {
		paddingVertical: 10, paddingHorizontal: 20,
		borderRadius: 50,
		backgroundColor: 'red',
	},
	participate_text: {
		color: '#fff',
		fontSize: 16, fontWeight: 'bold',
	},
});

export default withNavigation(({navigation,data}) => (
	<TouchableOpacity style={styles.container} onPress={_ => navigation.push('promo_participate')}>
		<View style={styles.image}></View>
		<View style={styles.area}>
			<Text style={styles.title}>{data.name}</Text>
			<View style={styles.about}>
				<TouchableOpacity style={styles.link_area}>
					<Text style={styles.link}>Сайт акции</Text>
					<Icon name="chevron-right" style={{color:'red'}} size={30} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.participate} onPress={_ => navigation.push('promo_participate')}>
					<Text style={styles.participate_text}>Участвовать</Text>
				</TouchableOpacity>
			</View>
		</View>
	</TouchableOpacity>
));
