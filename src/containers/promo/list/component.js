import React,{Component} from 'react';
import {StyleSheet,ScrollView,TouchableOpacity,View,Text} from 'react-native';

import Splash from './layout/splash';
import Layout from './layout/list';

export default class PromoListComponent extends Component {
	state = {};

	componentDidMount() {
		if(!this.props.data.length) this.load_next();
	}

	load_new = () => {
		this.props.list_data({new:true});
	}
	load_next = () => {
		this.props.list_data({next:true});
	}

	render() {
		return 1||this.props.initialized ? (
			<Layout
				{...this.props}
				state={this.state}
				load_new={this.load_new}
				load_next={this.load_next}
			/>
		) : (
			<Splash/>
		);
	}
};
