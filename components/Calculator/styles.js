import { StyleSheet, Dimensions } from 'react-native'

export default Styles = StyleSheet.create({
		container: {        
			backgroundColor: '#333',
			alignContent: 'flex-end',
			justifyContent: 'flex-end',
			height: 400,
			flex: 3,
			flexDirection: 'column'
	  },
	
		button: {
			backgroundColor:'#949ba8',
			flex:2, 
			marginRight: 2, 
			alignItems: 'center', 
			justifyContent: 'center',
			borderWidth:1,
			borderColor:'rgba(255,255,255,0.2)',
			borderRadius:10,			
	  },
	
	  orange: {
			backgroundColor: '#ba5b12'
	  },
	
	  display: {
			flex:6, 
			alignItems: 'flex-end', 
			justifyContent: 'flex-end',		
	  }	  
})
