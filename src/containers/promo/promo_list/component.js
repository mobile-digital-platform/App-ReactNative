import React,{Component} from 'react';
import {StyleSheet,ScrollView,TouchableOpacity,View,Text} from 'react-native';

import Layout from './layout/list';

export default class X extends Component {
	state = {};

	componentDidMount() {
		this.load_new();
	}

	load_new = () => {
		this.props.fetch_data();
	}

	render() {
		console.log("Component",this.props);

		return (
			<Layout
				{...this.props}
				state={this.state}
				load_new={this.load_new}
			/>
		);
	}
};
