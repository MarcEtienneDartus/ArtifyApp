import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'}]
const list2 = [{key: 'j'}, {key: 'k'},{key: 'l'}, {key: 'm'},{key: 'n'}, {key: 'o'},{key: 'p'}, {key: 'q'},{key: 'r'}]
const list3= [{key: 's'}, {key: 't'},{key: 'u'}, {key: 'v'},{key: 'w'}, {key: 'x'},{key: 'y'}, {key: 'z'}]

export default class Letter extends Component {
  render() {
    let rnd_list_number = Math.floor(Math.random() * 3)
    let rnd_answer = 'a';
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
          instructions={'Cliquez sur la lettre. '+rnd_answer} 
          ExerciseType={'Lettre'} 
          list={[list1,list2,list3]} 
          answer={rnd_answer}
          onBackPress={() => this.props.navigation.goBack()}
          >
      </Exercise>
    )
  }
}