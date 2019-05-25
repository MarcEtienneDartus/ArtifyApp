import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'lupeche'}, {key: 'pechule'}]
const list2 = [{key: 'chelupe'}, {key: 'peluche'}]
const list3 = [{key: 'luchepe'}, {key: 'chepelu'}]

export default class Word extends Component {
  render() {
    let rnd_list_number = Math.floor(Math.random() * 3)
    let rnd_answer = 'lupeche';
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
          instructions={'Cliquez sur le mot. '+rnd_answer}
          ExerciseType='Mot' 
          list={[list1,list2,list3]} 
          answer={rnd_answer}
          onBackPress={() => this.props.navigation.goBack()}
          >
      </Exercise>
    )
  }
}