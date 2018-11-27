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
	renderItem = ({item}) => (<Item data={item} />);
	renderFooter = () => {
		const {loading,loaded} = this.props;

		if(loaded) return (<Text>Больше ничего нет</Text>);
		if(loading) return (<Wait/>);
		return null;
	};

	render() {
		let {data} = this.props;

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
					onEndReachedThreshold={0.5}
					onRefresh={this.props.load_new}
					refreshing={this.props.loading}
				/>
			</View>
		);
	}
}
