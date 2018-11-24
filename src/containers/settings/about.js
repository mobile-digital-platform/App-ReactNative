import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import config from '../../config';

const styles = StyleSheet.create({
	container: {
		padding: 10, paddingHorizontal: 20,
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
		<Text style={styles.title}>О приложении</Text>
		<View style={styles.list}>
			<View style={styles.list_item}>
				<Icon name="navicon" style={{color:'red'}} size={40} />
				<Text style={styles.list_text}>Правила использования приложения</Text>
			</View>
			<View style={styles.list_item}>
				<Icon name="navicon" style={{color:'red'}} size={40} />
				<Text style={styles.list_text}>Политика конфиденциальности</Text>
			</View>
		</View>
		<View style={styles.bottom}>
			<Text style={styles.version}>Версия {config.version}, {'&copy;'} {config.year}</Text>
			<Text style={styles.support}>Телефон поддержки</Text>
			<Text style={styles.support_number}>{config.support_number}</Text>
		</View>
	</View>
);
