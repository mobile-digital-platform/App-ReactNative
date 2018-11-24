import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

export default ({navigation,styles = {}}) => (
	<TouchableOpacity style={{padding:15,paddingRight:0,}} onPress={_ => navigation.push('settings')}>
		<Icon name="gear" style={{marginRight:10,color:'#000',...styles}} size={40} />
	</TouchableOpacity>
);
