import React,{Component} from 'react';
import {Dimensions,Platform,StyleSheet,Image,StatusBar,TouchableOpacity,Text,View} from 'react-native';

import Bottle	from '../../../../../assets/splash_screen/bottle.png';
import Bubbles0	from '../../../../../assets/splash_screen/bubbles0.png';
import Bubbles1	from '../../../../../assets/splash_screen/bubbles1.png';
import Bubbles2	from '../../../../../assets/splash_screen/bubbles2.png';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f40000',
	},
	bubbles0: {marginBottom:1},
	// bubbles1: {marginBottom:1},
	bubbles2: {marginBottom:7},
	bottle: {
	},
});

export default class Splash extends Component {
	static navigationOptions = {
		headerStyle: {
			height: 0,
			borderBottomWidth: 0,
			backgroundColor: '#f40001',
		},
	};

	state = {
		now: 1,
	};

	constructor(props) {
		super(props);

		this.bubbles = [Bubbles0,Bubbles1,Bubbles2];
	}

	componentDidMount() {
		this.interval = setInterval(_ => this.setState(({now}) => ({now:++now%3})),200);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Image style={styles['bubbles'+this.state.now]} source={this.bubbles[this.state.now]} />
				<Image style={styles.bottle} source={Bottle} />
			</View>
		);
	}
}
