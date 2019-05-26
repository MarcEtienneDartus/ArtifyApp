import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import SentenceExercise from '../../Components/SentenceExercise';

const { width, height } = Dimensions.get('window');

export default class Success extends Component {

  constructor(props){
      super(props)
      this.image = this.props.navigation.getParam("image", "")
  }


  render() {
    return (
      <View style = {styles.container}>

        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>

        <Text style = {styles.title}>Bravo !</Text>

        <Image style = {styles.image} source = {{uri:this.image}}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  circle:{
    height: width*0.45,
    width: width*0.45,
    borderRadius: width*0.225,
    zIndex:0,
    position:'absolute',
    top: height/2,
    right: 0-width*0.225,
    backgroundColor: "#D2FFDF",
  },
  circle2:{
    height: width*0.45,
    width: width*0.45,
    borderRadius: width*0.225,
    zIndex:0,
    position:'absolute',
    top: height/4,
    left: 0-width*0.2,
    backgroundColor: "#D2FFDF",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "space-around",
  },

  title: {
    fontSize: 25,
    fontFamily: 'PoppinsBold',
  },
  image:{
    height: 200,
    width: 500,
  },

})
