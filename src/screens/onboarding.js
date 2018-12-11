import React,{Component} from 'react';
import {AsyncStorage,Dimensions,Platform,StyleSheet,Image,StatusBar,TouchableOpacity,Text,View} from 'react-native';

import config from '../config';

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
		textAlign: 'center',
	},
});

export default class Onboarding extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none',
		},
	};

	state = {
		loaded: false,
	};

	async componentDidMount() {
		let data = await AsyncStorage.getItem(config.storage_name);
		this.setState({loaded:true});
		// await new Promise(resolve => setTimeout(resolve,5000));
		if(data) this.props.navigation.replace('splash');
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				{this.state.loaded ? (
					<View>
						<Image style={[styles.image]} source={{uri:'https://www.coca-cola.ru/images/meals/logo.png'}} />
						<TouchableOpacity style={styles.button} onPress={_=>this.props.navigation.replace('splash')}>
							<Text style={styles.button_text}>Начать</Text>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		);
	}
}
