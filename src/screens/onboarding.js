import React,{Component} from 'react';
import {Dimensions,Platform,StyleSheet,Image,StatusBar,TouchableOpacity,Text,View} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#f40001',
	},
	image: {
		height: Dimensions.get('window').width*0.6,
		width:  Dimensions.get('window').width*0.6,
		marginBottom: 20,
		// borderRadius: Dimensions.get('window').width*0.4,
		resizeMode: 'contain',
	},
	button: {
		paddingVertical: 15, paddingHorizontal: 50,
		borderRadius: 100,
		backgroundColor: '#fff',
	},
	button_text: {
		color: 'red',
		fontSize: 20,
	},
});

export default class Onboarding extends Component {
	static navigationOptions = {
		headerStyle: {
			height: 0,
			borderBottomWidth: 0,
			backgroundColor: '#f40001',
		},
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Image style={[styles.image]} source={{uri:'https://www.coca-cola.ru/images/meals/logo.png'}} />
				<TouchableOpacity style={styles.button} onPress={_=>this.props.navigation.replace('promo_list')}>
					<Text style={styles.button_text}>Начать</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
