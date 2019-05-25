import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import ExerciseFrame from '../ExerciseFrame/ExerciseFrame';
import { Speech } from 'expo';

const { width, height } = Dimensions.get('window');

export default class Exercise extends Component {

  constructor(props) {
    super(props)
    this.answer = this.props.answer
    this.isSpeaking = false,
    this.SpeachOption = {
      SpeachOption:'fr-FR',
      onStart : ()=> {this.isSpeaking = true},
      onDone : ()=> {this.isSpeaking = false},
      onStopped : ()=> {this.isSpeaking = false},
    }
  }

  TextToSpeech = (text) => {
    if(this.isSpeaking) Speech.stop()
    Speech.speak(text, this.SpeachOption)
  }

  HandleAnswer = (key) =>{
    if(this.answer == key) this.TextToSpeech('Bravo, tu as trouvé la bonne réponse')
    else this.TextToSpeech('Ce n\'est pas la bonne réponse essaye encore !')
  }

  Button = ({item}) => {
    return(
      <TouchableOpacity onPress={()=>{this.HandleAnswer(item.key)}}>
        <Text style={styles.text}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list, ExerciseType, instructions } = this.props
    return (
      <ExerciseFrame instructions={instructions} ExerciseType={ExerciseType}>
        <View>
            <FlatList
              data={list[0]}
              horizontal={true}
              contentContainerStyle={styles.list}
              renderItem={this.Button}
              style={{marginTop:width*0.07}}
            />
            <FlatList
              data={list[1]}
              horizontal={true}
              contentContainerStyle={styles.list}
              renderItem={this.Button}
            />
            <FlatList
              data={list[2]}
              horizontal={true}
              contentContainerStyle={styles.list}
              renderItem={this.Button}
            />
        </View>
      </ExerciseFrame>
    )
  }
}

const styles = StyleSheet.create({
  list:{
    marginLeft: 0.05* width,
    width: 0.85*height,
    height: 0.15*width,
    marginRight: 0.05* width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text:{
    fontSize: 50,
    fontFamily:'Clicker',
  }
})
