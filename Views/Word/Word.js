import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'lupeche'}, {key: 'pechule'}]
const list2 = [{key: 'chelupe'}, {key: 'peluche'}]
const list3 = [{key: 'luchepe'}, {key: 'chepelu'}]

export default class Word extends Component {
  render() {
    return (
      <Exercise instructions={'Cliquez sur le mot. Peluche'} ExerciseType={'Mot'} list={[list1,list2,list3]} answer={'peluche'}>
      </Exercise>
    )
  }
}