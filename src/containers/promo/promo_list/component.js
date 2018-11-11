import React,{Component} from 'react';
import {StyleSheet,ScrollView,TouchableOpacity,View,Text} from 'react-native';
import {withNavigation} from 'react-navigation';

import config from '../../../config';

import Wait from '../../../templates/wait';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	head: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		padding: 10,
		borderTopWidth: 1, borderColor: '#b3d5d6',
		backgroundColor: '#b3d5d6',
	},
	value: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		padding: 10,
		borderTopWidth: 1, borderColor: '#b3d5d6',
	},
	text: {
		fontSize: 12, fontFamily: 'Light',
	},
	link: {
		width: '100%',
		padding: 20,
		fontSize: 18,
		textAlign: 'center',
	},
	error: {
		padding: 10,
		color: '#e34444',
		fontSize: 18,
	},
});

export default withNavigation(class Quotation extends Component {
	constructor(props) {
		super(props);

		this.list = [];
		this.error = '';
	}

	componentDidMount() {
		this.props.fetch_data();
		// this.interval = setInterval(_ => {
		// 	if(this.props.navigation.isFocused()) this.props.fetch_data();
		// },config.timeout);
	}

	render() {
		console.log("Component",this.props);
		return null;

		let data = this.props.data.quotation;
		if(Object.keys(data.list).length) {
			this.list = [];
			this.error = '';
			for(let i in data.list) this.list.push(Object.assign(data.list[i],{name:i}));
		}

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={_=>this.props.navigation.navigate('О приложении')}>
					<Text style={[styles.text,styles.link]}>〈  Вернуться к описанию</Text>
				</TouchableOpacity>
				{data.error ? (<Text style={[styles.text,styles.error]}>Ошибка: {data.error}</Text>) : null}
				<View style={styles.head}>
					<Text style={[styles.text,{width:'25%'}]}>Пара</Text>
					<Text style={[styles.text,{width:'25%'}]}>Последнее</Text>
					<Text style={[styles.text,{width:'25%'}]}>Высшее</Text>
					<Text style={[styles.text,{width:'25%'}]}>Процент</Text>
				</View>
				{(data.loading && !data.loaded) ? <Wait/> : null}
				{data.loaded ? (
					<ScrollView>
					{this.list.map((e,i) => (
						<View key={i} style={[styles.value,{backgroundColor:i%2?'#e1eeef':'#fff'}]}>
							<Text style={[styles.text,{width:'25%'}]}>{e.name}</Text>
							<Text style={[styles.text,{width:'25%'}]}>{e.last}</Text>
							<Text style={[styles.text,{width:'25%'}]}>{e.highestBid}</Text>
							<Text style={[styles.text,{width:'25%'}]}>{e.percentChange}</Text>
						</View>
					))}
					</ScrollView>
				) : null}
			</View>
		);
	}

});
