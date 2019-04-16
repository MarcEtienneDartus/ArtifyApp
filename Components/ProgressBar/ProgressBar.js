import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export default class ProgressBar extends Component {

  constructor(props){
    super(props)
    this.hasTitle = this.props.title !== undefined
  }

  render() {
    return (
      <View style = {styles.container}>
        {this.hasTitle &&<Text style={styles.title}>{this.props.title}</Text>}
        <Text style={styles.achievementText}>{this.props.percent*100 + "%"}</Text>
        <View style= {styles.progressBar}>
            <View style= {[styles.progressBarInter,{backgroundColor:this.props.color,width: width*0.75*this.props.percent}]}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  progressBar:{
    width: width*0.75,
    height: height*0.04,
    borderRadius: height*0.02,
    marginVertical: 5,
    borderWidth: 2,
    borderColor:"#333",
    justifyContent: 'center'
  },
  progressBarInter:{
    height: height*0.04-4,
    borderRadius: height*0.02,
    marginVertical: 5,
  },
  title:{
      color: "#000",
      fontSize:20,
      fontFamily: 'FiraMedium',
      position: 'absolute',
      top:-5,
      left:0,
  },

})