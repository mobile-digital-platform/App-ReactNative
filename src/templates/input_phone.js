import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Text,View} from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		height: 50,
		marginVertical: 5, paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
		backgroundColor: '#fff',
	},
	container_error: {
		borderColor: 'red',
	},
	title: {
		marginTop: 5,
		// backgroundColor: '#eee',
		color: '#bbb',
		fontSize: 14,
	},
	title_active: {
		marginTop: 0,
		fontSize: 20,
	},
	input: {
		width: '100%',
		marginBottom: 3, paddingVertical: 3,
		fontSize: 16,
	},
	error_text: {
		marginLeft: 20, marginBottom: 10,
		fontSize: 14,
		color: 'red',
	},
});

export default class PhoneInput extends Component {
	constructor(props) {
		super(props);
		console.log(props);

		this.state = {
			active: props.value && props.value.length,
			value: props.value || '',
			error: false || props.error,
		};

		this.input = React.createRef();
	}

	set_value = (value) => {
		this.setState({value,error:false});
		this.props.send && this.props.send(value);
	}

	set_active = async () => {
		await this.setState({active:true});
		this.input.current.focus();
	}
	reset_active = () => {
		if(!this.state.value.length) this.setState({active:false});
	}

	render() {
		let state = this.state;
		return (
			<View>
				{state.active ? (
					<View style={[styles.container,state.error?styles.container_error:{}]}>
						<Text style={styles.title}>{this.props.title}</Text>
						<TextInput
							ref={this.input}
							style={styles.input}
							value={state.value}
							keyboardType="phone-pad"
							onChangeText={this.set_value}
							onBlur={this.reset_active}
						/>
					</View>
				) : (
					<TouchableOpacity style={[styles.container,state.error?styles.container_error:{}]} onPress={this.set_active}>
						<Text style={[styles.title,styles.title_active]}>{this.props.title}</Text>
					</TouchableOpacity>
				)}
				{state.error && (<Text style={styles.error_text}>{state.error}</Text>)}
				{this.props.need_confirm && (
				<View style={styles.confirm}>
					<Text style={styles.confirm_text}>На номер отправлено SMS с кодом подтверждения</Text>
					<TouchableOpacity style={styles.confirm_enter} onPress={_=>navigation.push('settings_confirm_phone')}>
						<Text style={styles.confirm_enter_text}>Ввести код подтверждения</Text>
						<Icon name="chevron-right" style={{color:'red'}} size={40}/>
					</TouchableOpacity>
				</View>
				)}
			</View>
		);
	}
}

/*
import React from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Text,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	area: {
		paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
		backgroundColor: '#fff',
	},
	title: {
		paddingTop: 5,
		color: '#bbb',
		fontSize: 14,
	},
	input: {
		width: '100%',
		marginBottom: 3, paddingVertical: 3,
		fontSize: 16,
	},
	confirm: {
		marginTop: 10, paddingHorizontal: 20,
	},
	confirm_text: {
		color: '#bbb',
		fontSize: 16,
	},
	confirm_enter: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 5,
	},
	confirm_enter_text: {
		marginBottom: 3,
		color: 'red',
		fontSize: 18, fontWeight: 'bold',
	},
});

export default withNavigation(({navigation,...props}) => (
	<View style={styles.container}>
		<View style={styles.area}>
			<Text style={styles.title}>{props.title}</Text>
			<TextInput style={styles.input} value={props.value} />
		</View>
		{props.need_confirm && (
		<View style={styles.confirm}>
			<Text style={styles.confirm_text}>На номер отправлено SMS с кодом подтверждения</Text>
			<TouchableOpacity style={styles.confirm_enter} onPress={_=>navigation.push('settings_confirm_phone')}>
				<Text style={styles.confirm_enter_text}>Ввести код подтверждения</Text>
				<Icon name="chevron-right" style={{color:'red'}} size={40}/>
			</TouchableOpacity>
		</View>
		)}
	</View>
));
*/
