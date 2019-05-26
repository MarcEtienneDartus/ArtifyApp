import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Colors from '../../shared/Colors';

const { width, height } = Dimensions.get('window');

export default class Success extends Component {

  constructor(props){
      super(props)
      this.image = this.props.navigation.getParam("image", "")
      this.word = this.props.navigation.getParam("word", "No word")
  }


  render() {
    return (
      <View style = {styles.container}>

        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>

        <View style = {styles.header}>
            <Text style = {styles.title}>Bravo !</Text>
            <Text style = {styles.desc}>{`Bravo tu as écrit '${this.word}' !`}</Text>
        </View>

        <Image style = {styles.image} source = {{uri:this.image}} resizeMode="contain"/>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.pop(2)}>
        <Text style={styles.textButton}>CONTINUER</Text>
        </TouchableOpacity>

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
    fontSize: 30,
    fontFamily: 'PoppinsBold',
  },
  desc: {
    fontSize: 25,
    fontFamily: 'PoppinsBold',
  },
  image:{
    height: width/2,
    width: width,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#fff",
  },

  button:{
    borderRadius: 100,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.45*width,
    height: 50,
  },
  textButton: {
    fontSize: 25,
    fontFamily: 'PoppinsBold',
    color: "#fff",
  },

})
