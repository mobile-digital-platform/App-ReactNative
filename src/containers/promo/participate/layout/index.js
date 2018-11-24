import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#eee',
	},
	image: {
		justifyContent: 'center', alignItems: 'center',
		height: 80, width: '100%',
		backgroundColor: '#eee',
	},
	area: {
		padding: 10,
	},
	title: {
		marginBottom: 5,
		fontSize: 24,
	},
	ending: {
		fontSize: 14,
	},
	description: {
		fontSize: 14,
	},
	network_area: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingVertical: 10,
	},
	network_image: {
		height: 50, width: 50,
		marginRight: 10,
		borderRadius: 25,
		backgroundColor: '#ddd',
	},
	network_main: {
		flex: 1,
	},
	network_name: {
		fontSize: 18,
	},
	network_link_area: {
		paddingVertical: 5,
	},
	network_link: {
		borderBottomWidth: 1,
		fontSize: 14,
	},
	network_arrow_area: {
		padding: 5,
	},
	network_arrow: {
		fontSize: 24,
	},
});

export default withNavigation(({navigation,data}) => data ? (
	<View style={styles.container}>
		<View style={styles.image}><Text>Баннер</Text></View>
		<View style={styles.area}>
			<Text style={styles.title}>{data.title}</Text>
			<Text style={styles.ending}>Заканчивается через {data.ending} дней</Text>
			<Text style={styles.description}>{data.description}</Text>
		</View>
		<View style={styles.area}>
		{data.trade_network.map((e,i) => (
			<TouchableOpacity key={i} style={styles.network_area} onPress={_ => navigation.push('promo_participate')}>
				<View style={styles.network_image} />
				<View style={styles.network_main}>
					<Text style={styles.network_name}>{e.name}</Text>
					<TouchableOpacity style={styles.network_link_area}><Text style={styles.network_link}>{e.link}</Text></TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.network_arrow_area}><Text style={styles.network_arrow}>></Text></TouchableOpacity>
			</TouchableOpacity>
		))}
		</View>
	</View>
) : null);
