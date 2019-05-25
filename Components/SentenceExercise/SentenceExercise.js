import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SentenceExercise extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style = {[styles.container,{backgroundColor: this.props.color}]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.desc}>{this.props.desc}</Text>
        <View style={styles.rowStars}>
          {this.props.ratings.map(item => <Image style={styles.starImage} source={require('../../assets/star.png')} resizeMode='contain'/>)}
        </View>
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
  rowStars: {
    flexDirection: 'row',
    width: width*0.28,
    height: height*0.05,
  }, 
  starImage:{
    width: width*0.05,
    height: width*0.05,
    margin: 1
  },
})