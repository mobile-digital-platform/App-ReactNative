import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 65,
		marginVertical: 5, paddingHorizontal: 25,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
		backgroundColor: '#fff',
	},
	left: {
		flex: 1,
	},
	title: {
		marginTop: 10,
		// backgroundColor: '#eee',
		color: '#bbb',
		fontSize: 14,
	},
	title_active: {
		marginTop: 0,
		fontSize: 20,
	},
	input: {
		width: '100%',
		marginBottom: 8, paddingVertical: 3,
		fontSize: 18,
	},
	right: {
		width: 20,
		textAlign: 'right',
	},
	error_text: {
		marginLeft: 20, marginBottom: 10,
		fontSize: 14,
		color: 'red',
	},
});

export default withNavigation(({navigation,...props}) => (
	<TouchableOpacity style={styles.container} onPress={_=>navigation.push('settings_change_city')}>
		<View style={styles.left}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.input}>Комсомольск-на-Амуре</Text>
		</View>
		<Text styles={styles.right}><Icon name="chevron-right" style={{color:'red'}} size={40}/></Text>
	</TouchableOpacity>
));
