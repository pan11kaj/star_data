import React from  'react';
import {View,Text,StyleSheet} from  'react-native';

export default class DetailScreen extends  React.Component{
constructor(){
    super();
    this.state={
        data:{},
        url: `http://localhost:5000/planet?name=${this.props.navigation.getParam("star_name"
        )}`
    }
}
getDetails=()=>{
    const {url} = this.state;
    axios.get(url)
    .then(response=>{
        this.setdetails(response.data.data)
    })
    .catch(error=>{
        Alert.alert(error.message)
    })
}
setdetails = details=>{
    this.setState({
        details:details,  
    })
}
componentDidMount(){
    this.getDetails()
}
    render(){
        return(
            <View style={{backgroundColor:'cyan',flex:1}}>
            <Text style={styles.output}>{"star Name: "+this.state.details.star_name}</Text>
            <Text style={styles.output}>{"Mass: "+this.state.details.mass}</Text>
            <Text style={styles.output}>{"distance: "+this.state.details.distance}</Text>
            <Text style={styles.output}>{"Radius: "+this.state.details.radius}</Text>
         
            </View>
        )
    }
}
const styles  = StyleSheet.create({
    output:{
        color:'yellow',
        fontSize:20
    }
})