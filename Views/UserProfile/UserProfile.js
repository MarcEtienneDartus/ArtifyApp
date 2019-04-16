import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import ProgressBar from '../../Components/ProgressBar'

const { width, height } = Dimensions.get('window');

export default class UserProfile extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style = {styles.container}>
        
        <View style = {[styles.blocContainer,styles.skillsContainer]}>
          <Text style={styles.title}>RESUME DES COMPETENCES</Text>
          <View style = {[styles.bloc,styles.skills]}>
            <ProgressBar percent={0.86} color="#FC82FF" title="Lettres"/>
            <ProgressBar percent={0.61} color="#FF8C8C" title="Syllabes"/>
            <ProgressBar percent={0.42} color="#FFCC8F" title="Mots"/>
            <ProgressBar percent={0.09} color="#A7FFBD" title="Phrases"/>
          </View>
        </View>

        <View style = {[styles.blocContainer,styles.summaryContainer]}>
          <Text style={styles.title}>PROGRESSION GLOBALE</Text>
          <View style = {[styles.bloc,styles.summary]}>
            <ProgressBar percent={0.48} color="#D0FFFF"/>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  blocContainer:{
    marginTop: 25,
    width: width*0.9,
  },
  skillsContainer:{},
  summaryContainer:{},
  title: {
    fontSize: 22,
    color:"#000",
    fontFamily: 'FiraBold'
  },
  bloc:{
    marginTop: 5,
    width : width*0.9,
    padding : 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,

    shadowRadius: 7,
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowColor: '#000',
    elevation: 2,
    shadowOpacity: 1.0,
  },
  skills:{
    height: height*0.5,
    justifyContent: 'space-around',
  },
  skillsText:{
    fontSize: 15,
    color:"#000",
    fontFamily: 'FiraMedium'
  },

  summary:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
