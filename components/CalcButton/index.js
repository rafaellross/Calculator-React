import React, { Component } from 'react'
import Styles from './styles'
import { TouchableOpacity} from 'react-native';

import {
	View,
	Text,
} from 'react-native'

class CalcButton extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View style={{width:80, height:50}}>
				<TouchableOpacity style={Styles.container}>
					<Text>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default CalcButton