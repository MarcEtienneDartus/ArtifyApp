import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { ScreenOrientation, Speech } from 'expo';
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

export default class ExerciseFrame extends Component {

  constructor(props){
    super(props)
    this.isSpeaking = false,
    this.SpeachOption = {
      SpeachOption:'fr-FR',
      onStart : ()=> {this.isSpeaking = true},
      onDone : ()=> {this.isSpeaking = false},
      onStopped : ()=> {this.isSpeaking = false},
    }
  }

  componentWillMount() {
    this.changeScreenOrientation(ScreenOrientation.Orientation.LANDSCAPE)
  }
  componentWillUnmount() {
    this.changeScreenOrientation(ScreenOrientation.Orientation.PORTRAIT)
  }

  componentDidMount() {
    setTimeout(() => {
      this.HandleSpeaker()
    }, 1000);
  }

  changeScreenOrientation(orientation) {
    ScreenOrientation.allowAsync(orientation);
  }

  HandleSpeaker = () => {
    if(this.isSpeaking){
      Speech.stop()
    }
    else{
      Speech.speak(this.props.instructions, this.SpeachOption)
    }
  }

  imageExercise = () => {
    return(
      <View style={styles.imageContainer}>
        {this.props.ExerciseType == 'Lettre' && <Image style = {styles.exerciceImage} source={require('../../assets/letters.png')}/>}
        {this.props.ExerciseType == 'Syllabe' && <Image style = {styles.exerciceImage} source={require('../../assets/syll.png')}/>}
        {this.props.ExerciseType == 'Mot' && <Image style = {styles.exerciceImage} source={require('../../assets/words.png')}/>}
      </View>
    )
  }

  render() {
    const { ExerciseType } = this.props;
    return (
      <View style = {styles.container}>
        <View style={styles.title}>
          {this.imageExercise()}
          <Text style={styles.text}>{ExerciseType}</Text>
          <TouchableOpacity onPress={this.HandleSpeaker}>
            <Icon name="sound" size={40}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.tabsContainer}>
            {/* <View style={styles.absoluteShadow} /> */}
            {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: height,
    height: width,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabsContainer: {
    width: 0.9 * height,
    margin: 0.1 * width,
    marginTop: 0.05 * width,
    height: width - 0.3 * width,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    zIndex: 1,
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    shadowRadius: 20,
    shadowOffset: {
        width: 0,
        height: -4,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
    },
  absoluteShadow:{
    position:'absolute',
    width:  0.9 * height,
    height: width - 0.3 * width,
    borderRadius: 20,
    shadowRadius: 20,
    shadowOffset: {
        width: 0,
        height: -4,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
  },
  title:{
    marginLeft: 0.05 * width,
    height: 0.1 * width,
    display:'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  text:{
    color:'black',
    marginLeft: 0.05 * width,
    marginRight: 0.1 * width,
  },
  imageContainer:{
    borderRadius: 10,
    shadowRadius: 7,
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
  },
  exerciceImage:{
    width: width*0.13,
    height: width*0.13,
    borderRadius:10,
  },
})