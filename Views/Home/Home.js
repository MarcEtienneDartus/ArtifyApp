import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import ProgressBar from '../../Components/ProgressBar'
import Colors from '../../shared/Colors';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style = {styles.container}>

        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>

        <Image style={styles.image} source={require('../../assets/icon.png')} />
        
        <View style = {[styles.blocContainer,styles.achievementContainer]}>

          <Text style={styles.title}>OBJECTIF DU JOUR</Text>

          <View style = {[styles.bloc,styles.achievement]}>

            <ProgressBar percent={0.67} color="#D0FFFF"/>

            <Text style={styles.achievementText}>Encore 2 exercices !</Text>
          </View>

        </View>

        <View style = {[styles.blocContainer,styles.trainingContainer]}>

          <Text style={styles.title}>S'EXERCER</Text>

          <View style = {[styles.bloc,styles.training]}>
          
            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer} onPress={()=>{this.props.navigation.navigate('Letter')}}>
                <Image style = {styles.exerciceImage} source={require('../../assets/letters.png')}/>
              </TouchableOpacity>
              <Text style = {styles.exerciceTitle}>Lettres</Text>
            </View>

            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer} onPress={()=>{this.props.navigation.navigate('Syllable')}}>
                <Image style = {styles.exerciceImage} source={require('../../assets/syll.png')}/>
              </TouchableOpacity>
              <Text style = {styles.exerciceTitle}>Syllabes</Text>
            </View>

            <View style={styles.exercice}>
              <TouchableOpacity style={styles.imageContainer} onPress={()=>{this.props.navigation.navigate('Word')}}>
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
    fontFamily: 'PoppinsBold'
  },

  bloc:{
    backgroundColor: '#fff',
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
    fontFamily: 'PoppinsMedium'
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
    fontFamily: 'PoppinsMedium'
  },
  exerciceImage:{
    width: width*0.2,
    height: width*0.2,
    borderRadius:20,
  },

})
