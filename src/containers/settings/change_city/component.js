import React,{Component} from 'react';
import {Platform,StyleSheet,FlatList,Text,TextInput,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import city_list from '../../../config/city_list';

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		marginVertical: 10,
		paddingVertical: 15, paddingHorizontal: 20,
		borderWidth: 1, borderColor: '#ccc',
		borderRadius: 100,
		fontSize: 20,
	},
	list: {
		marginVertical: 10, paddingHorizontal: 20,
	},
	item: {
		paddingBottom: 20,
	},
	item_text: {
		fontSize: 20,
	},
	tint: {
		marginVertical: 10, paddingHorizontal: 20,
		fontSize: 16,
	},
});

find_city	= (id)   => city_list.filter(e => e.id==id)[0].name;
search_city	= (name) => city_list.filter(e => e.name.substr(0,name.length)==name);

export default withNavigation(class ChangeCity extends Component {
	state = {
		city_id: 0,
		city_name: '',
		suggest: [],
	};

	componentDidMount() {
		if(this.props.user.city>0) this.setState({city_id:this.props.user.city,city_name:find_city(this.props.user.city)});
	}

	change_text = (city_name) => {
		this.setState({city_name});
		if(city_name.length>1)	this.setState({suggest:search_city(city_name)});
		else					this.setState({suggest:[]});
	}
	select = (city_id,city_name) => {
		this.setState({city_id,city_name});
		this.props.change_city({id:city_id,name:city_name});
		this.props.navigation.goBack();
	}

	render_item = ({item}) => (
		<TouchableOpacity style={styles.item} onPress={_=>this.select(item.id,item.name)}>
			<Text style={styles.item_text}>{item.name}</Text>
		</TouchableOpacity>
	);

	render() {
		let state = this.state;

		return (
			<View style={styles.container}>
				<TextInput style={styles.input} value={state.city_name} placeholder="Ваш город" onChangeText={this.change_text} />
				{state.city_name.length ? (
					<FlatList
						style={styles.list}
						data={state.suggest}
						renderItem={this.render_item}
						// ItemSeparatorComponent={Separator}
						keyExtractor={item => ''+item.id}
					/>
				) : (
					<Text style={styles.tint}>Начните писать название вашего города, а потом выберите его из вариантов, которые появятся ниже.</Text>
				)}
			</View>
		);
	}
});
