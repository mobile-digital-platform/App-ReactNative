import React from 'react';
import {StyleSheet,View} from 'react-native';

const styles = StyleSheet.create({
	separator: {
		height: 1, width: '100%',
		backgroundColor: '#bbb',
	},
});

export default () => (
	<View style={styles.separator}/>
);
