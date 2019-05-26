import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const syllabe = [{key: 'jo'}, {key: 'ga'},{key: 'lo'}, {key: 'mi'},{key: 'no'},{key: 'su'}, {key: 're'},{key: 'pu'}, {key: 'vo'},{key: 'tu'},{key: 'ta'}, {key: 'gu'},{key: 'ci'}, {key: 'da'},{key: 'en'},{key: 'bu'}, {key: 'te'},{key: 'co'}, {key: 'si'},{key: 'ar'},{key: 'li'}, {key: 'de'},{key: 'be'}, {key: 'ki'},{key: 'bo'},{key: 'pi'}, {key: 'ja'},{key: 'vi'}, {key: 'sa'},{key: 'ur'}]
let position = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
export default class Syllable extends Component {
  constructor(props){
    super(props)
    let positionWord = Math.floor(Math.random() * 12);
    for (let i = position.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [position[i], position[j]] = [position[j], position[i]];
  }
    let listSyllable = []
    for (let index = 0; index < 12; index++) {
      listSyllable.push(syllabe[position[index]])
    }
    this.word = listSyllable[positionWord].key;
    this.list1=listSyllable.splice(0, 4);
    this.list2=listSyllable.splice(0, 4);
    this.list3=listSyllable
  }


  render() {
    return (
      <Exercise instructions={'Cliquez sur la Syllabe. '+this.word} ExerciseType={'Syllabe'} list={[this.list1,this.list2,this.list3]} answer={this.word} onBackPress={() => this.props.navigation.goBack()}>
      </Exercise>
    )
  }
}