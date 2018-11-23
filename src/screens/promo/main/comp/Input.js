import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		borderColor: 'gray', 
		borderWidth: 1,
		borderRadius: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 15,
		fontSize: 15,
		marginBottom: 10,
	},
});

export default function Input({placeholder, style}){
	return (
			<TextInput
				style={[styles.input, style]}
				placeholder={placeholder}
			/>
	)
}