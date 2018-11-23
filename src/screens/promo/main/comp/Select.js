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
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 10,
		fontSize: 15,
	},
});


export default function Select({data}){
	return (
		<View style={[styles.input, {}]}>
			<Picker >
				<Picker.Item label="Город" value="java" />
				<Picker.Item label="Уфа" value="java" />
				<Picker.Item label="Москва" value="js" />
				<Picker.Item label="Питер" value="js" />
			</Picker>
		</View>
	)
}
				