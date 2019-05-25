import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import { ScreenOrientation, Speech } from 'expo';
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

export default class Lecture extends Component {

  constructor(props){
    super(props)
    this.isSpeaking = false,
    this.SpeachOption = {
      SpeachOption:'fr-FR',
      onStart : ()=> {this.isSpeaking = true},
      onDone : ()=> {this.isSpeaking = false},
      onStopped : ()=> {this.isSpeaking = false},
    }
  }

  componentDidMount() {
  }

  imageExercise = () => {
    return(
      <View style={styles.imageContainer}>
        {this.props.ExerciseType == 'Lettre' && <Image style = {styles.exerciceImage} source={require('../../assets/letters.png')}/>}
        {this.props.ExerciseType == 'Syllabe' && <Image style = {styles.exerciceImage} source={require('../../assets/syll.png')}/>}
        {this.props.ExerciseType == 'Mot' && <Image style = {styles.exerciceImage} source={require('../../assets/words.png')}/>}
      </View>
    )
  }

  Text = (item,index) => {
    let color
    switch (index%3) {
      case 0:
        color = 'red'
        break;
      case 1:
        color = 'blue'
        break;
      case 2:
        color = 'green'
        break;
    }
    return(<Text style={{color:color, fontSize:20}}>{item.text}</Text>)
  }

  render() {
    const { TextName } = this.props;
    return (
      <View style = {styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>
        <View style={styles.title}>
          <Text style={styles.text}>{TextName}</Text>
        </View>
        <View style = {styles.tabsContainer}>
          <FlatList
            data={[{key: '1',text:'Maître Corbeau, sur un arbre perché,'}, 
            {key: '2',text:'Tenait en son bec un fromage.'}, 
            {key: '3',text:'Maître Renard, par l\'odeur alléché,'}, 
            {key: '4',text:'Lui tint à peu près ce langage :,'},
            {key: '5',text:'Et bonjour, Monsieur du Corbeau,'},
            {key: '6',text:'Que vous êtes joli ! que vous me semblez beau !'},
            {key: '7',text:'Sans mentir, si votre ramage'}
            ]}
            renderItem={({item,index}) => this.Text(item,index)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabsContainer: {
    height: 0.8 * height,
    margin: 0.05 * width,
    marginTop: 0.05 * width,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    zIndex: 1,
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    shadowRadius: 20,
    shadowOffset: {
        width: 0,
        height: -4,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
    },
  absoluteShadow:{
    position:'absolute',
    height: 0.8 * height,
    margin: 0.05 * width,
    borderRadius: 20,
    shadowRadius: 20,
    shadowOffset: {
        width: 0,
        height: -4,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
  },
  title:{
    marginLeft: 0.05 * width,
    height: 0.1 * width,
    display:'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  text:{
    color:'black',
    marginLeft: 0.05 * width,
    marginRight: 0.1 * width,
  },
  imageContainer:{
    borderRadius: 10,
    shadowRadius: 7,
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 1.0,
  },
  circle:{
    height: width*0.45,
    width: width*0.45,
    borderRadius: width*0.225,
    zIndex:0,
    position:'absolute',
    right: height/3,
    top: 0-width*0.35,
    backgroundColor: "#D2FFDF",
  },

  circle2:{
    height: width*0.45,
    width: width*0.45,
    borderRadius: width*0.225,
    zIndex:0,
    position:'absolute',
    right: height/4,
    bottom: 0-width*0.2,
    backgroundColor: "#D2FFDF",
  },
})