import React,{Component}				from 'react';
import {StyleSheet,FlatList,Text,View}	from 'react-native';

import config		from '../../../../config';

import Wait			from '../../../../templates/wait';

import Item			from './item';
import Separator	from './separator';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		// backgroundColor: '#ddd',
	},
});

export default class List extends Component {

	key_extractor = item => item.id;
	renderItem = ({item}) => (<Item data={item} />);
	renderFooter = () => {
		const {loading,loaded} = this.props;

		if(loaded) return (<Text>Больше ничего нет</Text>);
		if(loading) return (<Wait/>);
		return null;
	};

	render() {
		console.log("Component",this.props);
		let {data} = this.props;

		return (
			<View style={styles.container}>
				<FlatList
					data={data}
					extraData={this.props}
					// keyExtractor={this.key_extractor}
					renderItem={this.renderItem}
					onEndReached={this.props.load_new}
					onEndReachedThreshold={0.5}
					ListFooterComponent={this.renderFooter}
					// ListHeaderComponent={Separator}
					ItemSeparatorComponent={Separator}
				/>
			</View>
		);
	}
}
