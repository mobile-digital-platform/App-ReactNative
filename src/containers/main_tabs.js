import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	tab_bar: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		margin: 5,
	},
	tab: {
		borderWidth: 1, borderColor: '#999',
		paddingVertical: 5, paddingHorizontal: 20,
		backgroundColor: '#ddd',
	},
	selected: {
		backgroundColor: '#fff',
	}
});

export default withNavigation(({navigation}) => (
	<View style={styles.tab_bar}>
		<TouchableOpacity style={[styles.tab,navigation.state.routeName==='promo_list' ? styles.selected : {}]} onPress={_=>navigation.replace('promo_list')}>
			<Text>Все акции</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.tab,navigation.state.routeName==='promo_my_list' ? styles.selected : {}]} onPress={_=>navigation.replace('promo_my_list')}>
			<Text>Мои акции</Text>
		</TouchableOpacity>
	</View>
));
