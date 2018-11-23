import React,{Component} from 'react';
import {Platform,StyleSheet,Image,Text,TouchableOpacity,View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
	score: {
		width: 65,
		height: 55,
		marginRight: 5,
		backgroundColor: '#B30000',
		padding: 5,
		textAlign: 'center',
		alignSelf: 'flex-end',
	},
	scoreNumber: {
		fontSize: 18,
		color: 'lightgrey',
		fontWeight: 'bold', 
		color: 'white', 
		textAlign: 'center',
	},
	scoreText: {
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
	},
	logo: {
		width: 56,
		height: 56,
		alignSelf: 'flex-end',
		position: 'absolute',
		right: 10,
		bottom: -20,
	},
	titleText: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		color: 'white',
		fontSize: 25, 
		lineHeight: 24,
	},
	text: {
		color: 'lightgrey',
		marginTop: 10
	},
});


export default function Banner({}){
	return (
		<ImageBackground 
				source={{uri: 'https://www.sostav.ru/images/news/2018/04/20/on5vjvly.jpg'}} 
				style={{height: 150, zIndex: 10}} >
				<View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
					<View style={styles.score}>
						<Text style= {styles.scoreNumber}>185</Text>
						<Text style= {styles.scoreText}>баллов</Text>
					</View>
					<View style={styles.titleText}>
						<Text style={styles.title}>Готовы к вскусному ужину?</Text>
						<Text style={styles.text}>Заканчивается через 12 дней</Text>
					</View>
					<Image
						source={{uri: 'https://5ka.ru/static/web/img/social/logo-5ka.png'}}
						style={styles.logo} />
				</View>
		</ImageBackground>
	)
}
				