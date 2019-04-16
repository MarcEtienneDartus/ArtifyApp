import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style = {styles.container}>

        <Image style={styles.image} source={require('../../assets/icon.png')} />
        
        <View style = {[styles.blocContainer,styles.achievementContainer]}>

          <Text style={styles.title}>OBJECTIF DU JOUR</Text>

          <View style = {[styles.bloc,styles.achievement]}>
            <Text style={styles.achievementText}>67%</Text>
            <View style= {styles.progressBar}>
              <View style= {styles.progressBarInter}></View>
            </View>
            <Text style={styles.achievementText}>Encore 2 exercices !</Text>
          </View>

        </View>

        <View style = {[styles.blocContainer,styles.trainingContainer]}>

          <Text style={styles.title}>S'EXERCER</Text>

          <View style = {[styles.bloc,styles.training]}>
          
            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image style = {styles.exerciceImage} source={require('../../assets/letters.png')}/>
              </TouchableOpacity>
              <Text style = {styles.exerciceTitle}>Lettres</Text>
            </View>

            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image style = {styles.exerciceImage} source={require('../../assets/syll.png')}/>
              </TouchableOpacity>
              <Text style = {styles.exerciceTitle}>Syllabes</Text>
            </View>

            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image style = {styles.exerciceImage} source={require('../../assets/words.png')}/>
              </TouchableOpacity>
              <Text style = {styles.exerciceTitle}>Mots</Text>
            </View>
          
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
    // justifyContent: "space-around",
  },
  imageContainer:{
    borderRadius: 20,
    shadowRadius: 7,
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
  },
  image: {
    marginTop: 15,
    width: width * 0.4,
    height: width * 0.37,
  },
  blocContainer:{
    marginTop: 25,
    width: width*0.9,
  },
  achievementContainer:{

  },
  trainingContainer:{

  },
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
  achievement:{

  },
  achievementText:{
    fontSize: 15,
    color:"#000",
    fontFamily: 'FiraMedium'
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
    width: width*0.75*0.67,
    height: height*0.04-4,
    borderRadius: height*0.02,
    marginVertical: 5,
    backgroundColor: "#D0FFFF",
  },



  training:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  exercice:{
    marginTop: 5,
    width: width*0.25,
    alignItems: 'center',
  },
  exerciceTitle:{
    fontSize: 15,
    color:"#000",
    fontFamily: 'FiraMedium'
  },
  exerciceImage:{
    width: width*0.2,
    height: width*0.2,
    borderRadius:20,
  },

})
