import React,{Component} from 'react';
import {StyleSheet,Image,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import st from '../../services/storage';

import {request as settings_request} from '../../redux/reducers/settings';

import Bottle	from '../../../assets/splash_screen/bottle.png';
import Bubbles0	from '../../../assets/splash_screen/bubbles0.png';
import Bubbles1	from '../../../assets/splash_screen/bubbles1.png';
import Bubbles2	from '../../../assets/splash_screen/bubbles2.png';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bubbles0: {marginBottom:1},
	bubbles1: {marginBottom:0},
	bubbles2: {marginBottom:7},
	bottle: {marginTop:2},
});

export default withNavigation(class SplashComponent extends Component {
	constructor(props) {
		super(props);

		this.bubbles = [Bubbles0,Bubbles1,Bubbles2];

		this.state = {
			now: 1,
			user_loaded: false,
		};
	}

	componentDidMount() {
		this.interval = setInterval(_ => this.setState(({now}) => ({now:++now%3})),200);
		this.get_user();
		this.get_promo_list();
	}
	componentDidUpdate(prev_props) {
		if(this.state.user_loaded && this.props.promo_list.loaded) {
			// setTimeout(_ => {
				this.props.navigation.replace('promo_list');
			// },5000);
		}
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	get_user = async () => {
		let we = await st.get('user');
		if(we) {
			if(we.id) {
				this.props.update_user(we);

				let {response,error} = await settings_request.get(we.id);
				if(response) {
					this.props.update_user(response);
					st.set('user',response);
				}
				if(error) {
					Alert.alert('Не удается наладить связь с сервером');
				}
			} else {
				st.set('user',{});
			}
		}
		this.setState({user_loaded:true});
	}
	get_promo_list = async () => {
		if(this.props.promo_list.data.length) {
			this.props.get_data({next:true});
		} else {
			this.props.get_data({new:true});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles['bubbles'+this.state.now]} source={this.bubbles[this.state.now]} />
				<Image style={styles.bottle} source={Bottle} />
			</View>
		);
	}
});
