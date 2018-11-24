import React from 'react';
import {StyleSheet,TextInput,Text,View} from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginVertical: 5, paddingHorizontal: 20,
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
});

export default (data) => (
	<View style={styles.container}>
		<Text style={styles.title}>{data.title}</Text>
		<TextInput style={styles.input} value="Марина" />
	</View>
);
