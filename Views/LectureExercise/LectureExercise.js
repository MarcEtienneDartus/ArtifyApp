import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import ExerciseFrame from '../../Components/ExerciseFrame/ExerciseFrame';
import Lecture from '../Lecture/Lecture';

const { width, height } = Dimensions.get('window');

export default class LectureExercise extends Component {

  constructor(props) {
    super(props)
    this.type = this.props.navigation.state.params.type;
  }

  render() {
    const { list, ExerciseType, instructions } = this.props;
    return (
      <ExerciseFrame instructions='' ExerciseType={ExerciseType} onBackPress={() => this.props.navigation.goBack()}>
        <Lecture TextName={this.type}/>
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
