import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between', alignItems : 'center',
		borderBottomColor: 'lightgrey', borderBottomWidth: 1,
		paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,
	},
	icon: {
		width: 50, height: 50,
		borderWidth: 1,
		borderRadius: 50,
	},
	button: {
		borderWidth: 1,
		borderRadius: 40,
		justifyContent: 'center', alignItems: 'center',
	}
});


export default function Line({}){
	return (
			<View style={styles.container}>
				<View style={styles.icon}></View>
				<View style={{marginRight: 80}}>
					<Text>Текс</Text>
					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
						<Text style={styles.title}>Условия акции</Text>
						<Icon name="chevron-right" size={10} />
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text>Участвовать</Text>
				</TouchableOpacity>
			</View>
	)
}
				