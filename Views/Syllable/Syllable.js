import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'ta'}, {key: 'gu'},{key: 'ci'}, {key: 'da'},{key: 'en'}]
const list2 = [{key: 'jo'}, {key: 'ga'},{key: 'lo'}, {key: 'mi'},{key: 'no'}]
const list3 = [{key: 'su'}, {key: 're'},{key: 'pu'}, {key: 'vo'},{key: 'tu'}]

export default class Syllable extends Component {
  render() {
    return (
      <Exercise instructions={'Cliquez sur la Syllabe. ga'} ExerciseType={'Syllabe'} list={[list1,list2,list3]} answer={'ga'}>
      </Exercise>
    )
  }
}