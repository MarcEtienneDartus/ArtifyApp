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
        
        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>

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

        <TouchableOpacity style = {styles.logOut} onPress={()=>this.props.navigation.navigate('Login')}>
          <Text style={styles.logOutText}>DECONNEXION</Text>
        </TouchableOpacity>


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

  blocContainer:{
    marginTop: 25,
    width: width*0.9,
  },
  skillsContainer:{},
  summaryContainer:{},
  title: {
    fontSize: 22,
    color:"#000",
    fontFamily: 'PoppinsBold'
  },
  bloc:{
    backgroundColor: "#fff",
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
    height: height*0.45,
    justifyContent: 'space-around',
  },
  skillsText:{
    fontSize: 15,
    color:"#000",
    fontFamily: 'PoppinsMedium'
  },

  summary:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  logOut:{
    marginTop: 20,
    borderRadius: height*0.03,
    height: height*0.06,
    width: width*0.8,
    backgroundColor: "#FF6666",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logOutText:{
    fontFamily: 'PoppinsBold',
    fontSize: 17,
    color: '#fff',
  },
})
