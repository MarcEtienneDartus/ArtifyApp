import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class SentenceExercise extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={styles.container}>
          <LinearGradient colors={this.props.colors} style={styles.gradient}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text numberOfLines={3} style={styles.desc}>{this.props.desc}</Text>
              <View style={styles.rowStars}>
                {this.props.ratings.map(nitro => <Image style={styles.starImage} source={require('../../assets/star.png')} resizeMode='contain'/>)}
              </View>
          </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width*0.38,
    height: height*0.19,
    borderRadius: 20,
  },  
  gradient: {
    flex:1,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
  },
  title:{
      color: "#fff",
      fontSize:23,
      fontFamily: 'PoppinsBold',
  },
  desc:{
    color: "#fff",
    fontSize:12,
    fontFamily: 'PoppinsMedium',
  },
  rowStars: {
    flexDirection: 'row',
    width: width*0.28,
    height: height*0.05,
  }, 
  starImage:{
    width: width*0.04,
    height: width*0.04,
    margin: 1
  },
})