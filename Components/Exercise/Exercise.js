import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import ExerciseFrame from '../ExerciseFrame/ExerciseFrame';
import { Speech } from 'expo';
import { AsyncStorage } from "react-native";

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
    if(this.isSpeaking) 
      Speech.stop()
    Speech.speak(text, this.SpeachOption)
  }

  HandleAnswer = (key) =>{
    if(this.answer == key){
      this.TextToSpeech('Bravo, tu as trouvé la bonne réponse')
      if(this.answer.length == 1) this.UpdateScore('ScoreLettres')
      if(this.answer.length == 2) this.UpdateScore('ScoreSyllabes')
      if(this.answer.length > 2) this.UpdateScore('ScoreMots') 
      this.UpdateScore('DailyScore') 
    } 
    else this.TextToSpeech('Ce n\'est pas la bonne réponse essaye encore !')
  }

  UpdateScore = async (score) =>{
    let  points = parseFloat(await AsyncStorage.getItem(score));
    if(score == 'DailyScore') points += 1
    else points += 0.03
    AsyncStorage.setItem(score,points.toString());
  }

  Button = ({item}) => {
    return(
      <TouchableOpacity onPress={() => this.HandleAnswer(item.key)}>
        <Text style={styles.text}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list, ExerciseType, instructions } = this.props;
    return (
      <ExerciseFrame instructions={instructions} ExerciseType={ExerciseType} onBackPress={() => this.props.onBackPress()}>
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
