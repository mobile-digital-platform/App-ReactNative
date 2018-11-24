import React from 'react';
import {StyleSheet,FlatList,ImageBackground,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

import Icon from 'react-native-vector-icons/EvilIcons';

import Retailer		from './retailer';
import Separator	from './separator';

const styles = StyleSheet.create({
	container: {
	},
	banner: {
		padding: 20, paddingTop: 50,
	},
	title: {
		marginBottom: 10,
		color: '#fff',
		fontSize: 24, fontWeight: 'bold',
		textTransform: 'uppercase',
		textShadowRadius: 5, textShadowColor: '#111',
	},
	subtitle: {
		paddingBottom: 10,
		color: '#bbb',
		fontSize: 16, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	ending: {
		color: '#fff',
		fontSize: 18,
		textShadowRadius: 5, textShadowColor: '#111',
	},

	area: {
		padding: 20,
	},
	description: {
		color: '#111',
		fontSize: 16,
	},

	retailers: {
		paddingVertical: 20,
	},
});

export default withNavigation(({navigation,data}) => (
	<View style={styles.container}>
		<ImageBackground style={styles.banner} source={{uri:'https://www.sostav.ru/images/news/2018/04/20/on5vjvly.jpg'}}>
			<Text style={styles.title}>{data.title}</Text>
			<Text style={styles.ending}>Заканчивается через {data.ending} дней</Text>
		</ImageBackground>
		<View style={styles.area}>
			<Text style={styles.subtitle}>Условия акции</Text>
			<Text style={styles.description}>{data.description}</Text>
		</View>
		<View style={styles.retailers}>
			<Text style={[styles.subtitle,{paddingHorizontal:20}]}>Где проводится</Text>
			<FlatList
				data={data.retailer}
				renderItem={({item}) => (<Retailer data={item} />)}
				ItemSeparatorComponent={Separator}
				keyExtractor={item => ''+item.id}
			/>
		</View>
	</View>
));
