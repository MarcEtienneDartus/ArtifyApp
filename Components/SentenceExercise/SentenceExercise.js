import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export default class SentenceExercise extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style = {[styles.container,{backgroundColor: this.props.color}]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.desc}>{this.props.desc}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width*0.38,
    height: height*0.19,
    borderRadius: 20,
    padding: 10,
  },  
  title:{
      color: "#fff",
      fontSize:23,
      fontFamily: 'PoppinsBold',
  },
  desc:{
    color: "#fff",
    fontSize:18,
    fontFamily: 'PoppinsMedium',

},

})