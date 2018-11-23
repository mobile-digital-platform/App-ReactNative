import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: 'red',
		borderRadius: 40,
		paddingTop: 15,
		paddingBottom: 15,
		textAlign: 'center',
		marginBottom: 10,
	},
});


export default function Button1({value, style}){
	return (
		<TouchableOpacity
			style={[styles.button, style]}
		>
			<Text style={{color: 'white', fontSize: 15}}>{value}</Text>
		</TouchableOpacity>
	)
}
