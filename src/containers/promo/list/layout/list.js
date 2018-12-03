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

	key_extractor = item => ''+item.id;
	renderItem = ({item}) => (<Item data={item} my={this.props.my} />);
	renderFooter = () => {
		if(this.props.loaded)	return (<Text>Больше ничего нет</Text>);
		// if(this.props.loading)	return (<Wait/>);
		return null;
	};

	render() {
		let {data} = this.props;
		console.log(data);

		return (
			<View style={styles.container}>
				<FlatList
					data={data}
					renderItem={this.renderItem}
					// ItemSeparatorComponent={Separator}
					ListFooterComponent={this.renderFooter}
					// ListHeaderComponent={Separator}
					extraData={this.props}
					keyExtractor={this.key_extractor}
					onEndReached={this.props.load_next}
					onEndReachedThreshold={0.9}
					onRefresh={this.props.load_new}
					refreshing={this.props.loading}
				/>
			</View>
		);
	}
}
