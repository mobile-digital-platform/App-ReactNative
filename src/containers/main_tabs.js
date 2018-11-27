import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	tab_bar: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		height: 45, width: 258,
		margin: 5,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
	},
	tab: {
		height: 45,
		margin: -1, paddingVertical: 10, paddingHorizontal: 20,
	},
	tab_selected: {
		borderRadius: 100,
		backgroundColor: 'red',
	},
	text: {
		fontSize: 18,
	},
	text_selected: {
		color: '#fff',
	},
});

export default withNavigation(({navigation}) => {
	let selected = navigation.state.routeName === 'promo_list';
	return (
		<View style={styles.container}>
			<View style={styles.tab_bar}>
				<TouchableOpacity style={[styles.tab,selected ? styles.tab_selected : {}]} onPress={_=>navigation.replace('promo_list')}>
					<Text style={[styles.text,selected ? styles.text_selected : {}]}>Все акции</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.tab,selected ? {} : styles.tab_selected]} onPress={_=>navigation.replace('promo_my_list')}>
					<Text style={[styles.text,selected ? {} : styles.text_selected]}>Мои акции</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
});
