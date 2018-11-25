import React from 'react';
import {StyleSheet,TextInput,Text,View} from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginVertical: 5, paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 20,
		backgroundColor: '#fff',
	},
	input: {
		height: 100, width: '100%',
		marginTop: 10, marginBottom: 15,
		fontSize: 16,
	},
});

export default (props) => (
	<View style={styles.container}>
		<TextInput style={styles.input} multiline={true} placeholder="Укажите адрес постоянной регистрации (как в паспорте)" />
	</View>
);
