import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import config from '../../config';

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20, paddingHorizontal: 30,
	},
	title: {
		paddingVertical: 10,
		color: '#bbb',
		fontSize: 16, fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default () => (
	<View style={styles.container}>
		<Text style={styles.title}>Учетная запись</Text>
		<View style={styles.list}>
			<View style={styles.list_item}>
				<Icon name="user" style={{color:'red'}} size={40} />
				<Text style={styles.list_text}>Сменить пользователя</Text>
			</View>
			<View style={styles.list_item}>
				<Icon name="unlock" style={{color:'red'}} size={40} />
				<Text style={styles.list_text}>Изменить пароль</Text>
			</View>
		</View>
	</View>
);
