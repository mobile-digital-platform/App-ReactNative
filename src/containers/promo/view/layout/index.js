import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#eee',
		borderColor: 'blue',
		borderWidth: 1,
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
		fontSize: 14,
		paddingLeft: 10,
	},
	ending: {
		fontSize: 14,
	},
	description: {
		fontSize: 14,
	},
	companies: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems : 'center',
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	circle: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: 'black',
	},
	participate: {
		width: 30,
		height: 30,
		borderRadius: 50,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default withNavigation(({navigation,data}) => (
	<View style={styles.container}>
		<View>
			<View style={styles.image}><Text>Баннер</Text></View>
			<View style={styles.area}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.ending}>Заканчивается через {data.ending} дней</Text>
				<Text style={styles.description}>{data.description}</Text>
			</View>
			<View style={styles.area}></View>
		</View>
		
		<View>
			<Text style={styles.title}>Где проводится</Text>
			<View style={styles.companies}>
				<View style={styles.circle}></View>
				<View style={{marginRight: 80}}>
					<Text style={{fontWeight: 'bold', fontSize: 22}}>{data.title}</Text>
					<Text style={{fontSize: 15, textDecorationLine: 'underline'}}>{data.title}</Text>
				</View>
				<TouchableOpacity style={styles.participate}>
					<Icon name="chevron-right" style={{color:'white',textAlign: 'center',}} size={40} />
				</TouchableOpacity>
			</View>
		</View>

		<View>
			<Text style={styles.title}>Где проводится</Text>
			<View style={styles.companies}>
				<View style={styles.circle}></View>
				<View style={{marginRight: 80}}>
					<Text style={{fontWeight: 'bold', fontSize: 22}}>{data.title}</Text>
					<Text style={{fontSize: 15, textDecorationLine: 'underline'}}>{data.title}</Text>
				</View>
				<TouchableOpacity style={styles.participate}>
					<Icon name="chevron-right" style={{color:'white',textAlign: 'center',}} size={40} />
				</TouchableOpacity>
			</View>
		</View>

		<View>
			<Text style={styles.title}>Где проводится</Text>
			<View style={styles.companies}>
				<View style={styles.circle}></View>
				<View style={{marginRight: 80}}>
					<Text style={{fontWeight: 'bold', fontSize: 22}}>{data.title}</Text>
					<Text style={{fontSize: 15, textDecorationLine: 'underline'}}>{data.title}</Text>
				</View>
				<TouchableOpacity style={styles.participate}>
					<Icon name="chevron-right" style={{color:'white',textAlign: 'center',}} size={40} />
				</TouchableOpacity>
			</View>
		</View>
	</View>
));
