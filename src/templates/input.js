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

export default class Input extends Component {
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
							secureTextEntry={this.props.password}
							value={state.value}
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
			</View>
		);
	}
}
