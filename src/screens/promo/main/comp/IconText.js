import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, TextInput, Button, Picker, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
	box: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#494949',
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
	},
	icon: {
		color: 'red',
		marginRight: 5,
	}
});


export default function IconText({text, icon}){
	return (
		<TouchableOpacity style={styles.box}>
			<Icon name={icon} style={styles.icon} size={20} />
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}
				