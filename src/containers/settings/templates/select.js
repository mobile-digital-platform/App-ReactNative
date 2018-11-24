import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 5, paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
	},
	left: {
		flex: 1,
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
	right: {
		width: 20,
		textAlign: 'right',
	}
});

export default (props) => (
	<TouchableOpacity style={styles.container}>
		<View style={styles.left}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.input}>Марина</Text>
		</View>
		<Text styles={styles.right}><Icon name="chevron-right" style={{color:'red'}} size={40}/></Text>
	</TouchableOpacity>
);
