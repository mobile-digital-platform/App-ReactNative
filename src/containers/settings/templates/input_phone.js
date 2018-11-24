import React from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Text,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	area: {
		paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
	},
	title: {
		paddingTop: 5,
		color: '#bbb',
		fontSize: 14,
	},
	input: {
		width: '100%',
		marginBottom: 3, paddingVertical: 3,
		fontSize: 16,
	},
	confirm: {
		marginTop: 10, paddingHorizontal: 20,
	},
	confirm_text: {
		color: '#bbb',
		fontSize: 16,
	},
	confirm_enter: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 5,
	},
	confirm_enter_text: {
		marginBottom: 3,
		color: 'red',
		fontSize: 18, fontWeight: 'bold',
	},
});

export default withNavigation(({navigation,...props}) => (
	<View style={styles.container}>
		<View style={styles.area}>
			<Text style={styles.title}>{props.title}</Text>
			<TextInput style={styles.input} value="Марина" />
		</View>
		{props.need_confirm && (
		<View style={styles.confirm}>
			<Text style={styles.confirm_text}>На номер отправлено SMS с кодом подтверждения</Text>
			<TouchableOpacity style={styles.confirm_enter} onPress={_=>navigation.push('settings_confirm_phone')}>
				<Text style={styles.confirm_enter_text}>Ввести код подтверждения</Text>
				<Icon name="chevron-right" style={{color:'red'}} size={40}/>
			</TouchableOpacity>
		</View>
		)}
	</View>
));
