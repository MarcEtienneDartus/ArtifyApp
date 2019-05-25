import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'ta'}, {key: 'gu'},{key: 'ci'}, {key: 'da'},{key: 'en'}]
const list2 = [{key: 'jo'}, {key: 'ga'},{key: 'lo'}, {key: 'mi'},{key: 'no'}]
const list3 = [{key: 'su'}, {key: 're'},{key: 'pu'}, {key: 'vo'},{key: 'tu'}]

export default class Syllable extends Component {
  render() {
    let rnd_list_number = Math.floor(Math.random() * 3)
    let rnd_answer = 'ta';
    if(rnd_list_number === 0){
      rnd_list_number = Math.floor(Math.random() * list1.length)
      rnd_answer = list1[rnd_list_number].key
    }
    else if(rnd_list_number === 1){
      rnd_list_number = Math.floor(Math.random() * list2.length)
      rnd_answer = list2[rnd_list_number].key
    }
    else{
      rnd_list_number = Math.floor(Math.random() * list3.length)
      rnd_answer = list3[rnd_list_number].key
    }
    return (
      <Exercise 
          instructions={'Cliquez sur la Syllabe. '+rnd_answer}
          ExerciseType='Syllabe'
          list={[list1,list2,list3]} 
          answer={rnd_answer}
          onBackPress={() => this.props.navigation.goBack()}
          >
      </Exercise>
    )
  }
}