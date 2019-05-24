import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const list1 = [{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'}]
const list2 = [{key: 'j'}, {key: 'k'},{key: 'l'}, {key: 'm'},{key: 'n'}, {key: 'o'},{key: 'p'}, {key: 'q'},{key: 'r'}]
const list3= [{key: 's'}, {key: 't'},{key: 'u'}, {key: 'v'},{key: 'w'}, {key: 'x'},{key: 'y'}, {key: 'z'}]

export default class Letter extends Component {
  render() {
    return (
      <Exercise instructions={'Cliquez sur la lettre. A'} ExerciseType={'Lettre'} list={[list1,list2,list3]} answer={'a'}>
      </Exercise>
    )
  }
}