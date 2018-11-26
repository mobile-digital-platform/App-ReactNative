import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Input from '../../../templates/input';

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		marginVertical: 10,
		paddingVertical: 15, paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
		fontSize: 20,
	},
	tint: {
		marginVertical: 10, paddingHorizontal: 20,
		fontSize: 16,
	},
});

export default (props) =>  (
	<View style={styles.container}>
		<TextInput style={styles.input} placeholder="Ваш город" />
		<Text style={styles.tint}>Начните писать название вашего города, а потом выберите его из вариантов, которые появятся ниже.</Text>
	</View>
);
