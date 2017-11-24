import React, { Component } from 'react'
import Styles from './styles'
import CalcButton from '../CalcButton';
import {
	View,
	Text,
	TouchableOpacity,
	Alert
} from 'react-native'

class Calculator extends Component {

	constructor(props){
		super(props);
		this.state = {display : "0"};
		this.state = {current : ""};
		this.state = {last : ""};

	}	

	_onPressButton(value){
		let operators = ['+', '-', 'x', '/'];
		let decimalAdded = false;
		this.setState(previousState => {
			if(value == 'C') {
				return {display: '0'};
			}
			else if(Number.isInteger(value) && value > 0){				
				if (previousState.display == '0') {
					return {display: value.toString()};	
				}
				else {
					return {display: (previousState.display || "") + value};
				}
				
			} 
			else if (value === 0){
				
			}
		});
	}
	

	_calculate(){
		this.setState(previousState => {
			
			return { display: eval(previousState.display.replace("x", "*"))}
		});
	}

	render() {
		return (
			<View style={Styles.container}>
			<View style={{flexDirection:'column',flex:6}}>
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				<View style={Styles.display}>
				  <Text style={{color: '#fff', fontSize: 40}}>{this.state.display}</Text>                      
				</View>                
			  </View>                   
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("C")}}>          
					<Text>C</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("&#177;")}}>          
					<Text>&#177;</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("%")}}>          
					<Text>%</Text>                      
				  </TouchableOpacity>                    
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("/")}}>                    
					<Text>&#247;</Text>                      
				  </TouchableOpacity>                              
			  </View>           
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(7)}}>          
					<Text>7</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(8)}}>          
					<Text>8</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(9)}}>          
					<Text>9</Text>                      
				  </TouchableOpacity>                    
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("x")}}>          
					<Text>X</Text>                      
				  </TouchableOpacity>                              
			  </View>          
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(4)}}>          
					<Text>4</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(5)}}>          
					<Text>5</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(6)}}>          
					<Text>6</Text>                      
				  </TouchableOpacity>                    
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("-")}}>          
					<Text>-</Text>                      
				  </TouchableOpacity>                              
			  </View>            
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(1)}}>          
					<Text>1</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(2)}}>          
					<Text>2</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(3)}}>          
					<Text>3</Text>                      
				  </TouchableOpacity>                    
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._onPressButton("+")}}>          
					<Text>+</Text>                      
				  </TouchableOpacity>                              
			  </View>    
			  <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10}}>
				  <TouchableOpacity style={[Styles.button, {flex:4}]} onPress={() => { this._onPressButton(0)}}>          
					<Text>0</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={Styles.button} onPress={() => { this._onPressButton(".")}}>          
					<Text>.</Text>                      
				  </TouchableOpacity>          
				  <TouchableOpacity style={[Styles.button, Styles.orange]} onPress={() => { this._calculate()}}>          
					<Text>=</Text>                      
				  </TouchableOpacity>                    
			  </View>    
			</View>    
		  </View> 	
		);
	}
}

export default Calculator