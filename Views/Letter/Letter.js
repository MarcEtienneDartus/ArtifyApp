import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const letter = [{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'}, {key: 'k'},{key: 'l'}, {key: 'm'},{key: 'n'}, {key: 'o'},{key: 'p'}, {key: 'q'},{key: 'r'},{key: 's'}, {key: 't'},{key: 'u'}, {key: 'v'},{key: 'w'}, {key: 'x'},{key: 'y'}, {key: 'z'}]
let position = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

export default class Letter extends Component {
  constructor(props){
    super(props)
    let positionWord = Math.floor(Math.random() * 26);
    for (let i = position.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [position[i], position[j]] = [position[j], position[i]];
  }
    let listLetter = []
    for (let index = 0; index < 26; index++) {
      listLetter.push(letter[position[index]])
    }
    this.word = listLetter[positionWord].key;
    this.list1=listLetter.splice(0, 9);
    this.list2=listLetter.splice(0, 9);
    this.list3=listLetter
  }

  render() {
    return (
      <Exercise instructions={'Cliquez sur la lettre. '+this.word} ExerciseType={'Lettre'} list={[this.list1,this.list2,this.list3]} answer={this.word} onBackPress={() => this.props.navigation.goBack()}>
      </Exercise>
    )
  }
}