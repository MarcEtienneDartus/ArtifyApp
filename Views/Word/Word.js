import React, { Component } from 'react'
import Exercise from '../../Components/Exercise/Exercise';

const mot = 
[
  [{key: 'pechule'}, {key: 'lupeche'},{key: 'chelupe'}, {key: 'peluche'},{key: 'luchepe'}, {key: 'chepelu'}],
  [{key: 'aligator'}, {key: 'toraliga'}, {key: 'gaalitor'}, {key: 'torgalita'}, {key: 'litagota'}, {key: 'chepelu'}],
  [{key: 'supermarché'}, {key: 'chésupermarch'},{key: 'marchésuper'}, {key: 'persurmarché'},{key: 'chémarpersu'}, {key: 'marsuperché'}],
  [{key: 'trotinette'}, {key: 'netteroti'},{key: 'tronetteti'}, {key: 'nettetitro'},{key: 'titronette'}, {key: 'tinettetro'}],
  [{key: 'ordinateur'}, {key: 'tornidateur'},{key: 'ornateurdi'}, {key: 'dinateuror'},{key: 'teurdinator'}, {key: 'orditeurrna'}],
  [{key: 'paquebot'}, {key: 'botquepa'},{key: 'pabotque'}, {key: 'quebotpa'},{key: 'botpaque'}, {key: 'quepabot'}],
  [{key: 'cheminée'}, {key: 'néechemi'},{key: 'michenée'}, {key: 'néemiche'},{key: 'minéeche'}, {key: 'chenéemi'}],
  [{key: 'crocodile'}, {key: 'dilecroco'},{key: 'crodileco'}, {key: 'cocrodile'},{key: 'dilecocro'}, {key: 'codilecro'}],
  [{key: 'océan'}, {key: 'oancé'},{key: 'céoan'}, {key: 'céano'},{key: 'ancéo'}, {key: 'anocé'}]
]
let position = [0,1,2,3,4,5]

export default class Word extends Component {
  constructor(props){
    super(props)
    let positionMot = Math.floor(Math.random() * 10);
    let listeMot = mot[positionMot]
    for (let i = position.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [position[i], position[j]] = [position[j], position[i]];
  }
    let listMot = []
    for (let index = 0; index < listeMot.length; index++) {
      listMot.push(listeMot[position[index]])
    }
    this.word = listeMot[0].key;
    this.list1=listMot.splice(0, 2);
    this.list2=listMot.splice(0, 2);
    this.list3=listMot
  }

  render() {
    return (
      <Exercise
      instructions={'Cliquez sur le mot. '+this.word}
      ExerciseType={'Mot'}
      list={[this.list1,this.list2,this.list3]}
      answer={this.word}
      onBackPress={() => this.props.navigation.goBack()}
      onSuccess={()=> this.props.navigation.navigate('WritingScreen',{word:this.word})}/>
    )
  }
}