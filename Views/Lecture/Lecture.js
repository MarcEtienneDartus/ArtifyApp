import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import fables from '../../Data/fables.json'
import { LinearGradient } from 'expo';

const { width, height } = Dimensions.get('window');

determineText = title => {
  if(title === 'La cigale et la fourmi'){
    return fables.cigale_fourmi
  }
  else if(title === 'Le Corbeau et le Renard'){
    return fables.corbeau_renard;
  }
  else{
    return fables.grenouille_boeuf;
  }
}

const color_options = 
[
  {
    c1: '#12c2e9',
    c2: '#f64f59'
  },
  {
    c1: '#544a7d',
    c2: '#ffd452'
  },
  {
    c1: '#34e89e',
    c2: '#5f3443',
  },
  {
    c1: '#8A2387',
    c2: '#F27121'
  },
  {
    c1: '#fc00ff',
    c2: '#00dbde',
  },
]

const font_options = 
[
  'PoppinsBlack', 'PoppinsMedium', 'PoppinsThin', 'FiraBlack', 'FiraRegular', 'FiraThin'
]

export default class Lecture extends Component {

  constructor(props){
    super(props);
    this.title = this.props.TextName;
    this.textToShow = determineText(this.title);
    this.state = {
      color: color_options[0],
      font: font_options[0]
    }
  }


  Text = item => {
    const { color, font } = this.state;
    const l = item.text.length;
    let max_split = Math.floor(l / 6);
    const rx = new RegExp(`.{1,${max_split}}`, 'g')
    const split_text = item.text.match(rx);
    const split_colors = split_text.map(_ => 
      {
        const rnd = Math.floor(Math.random() * 3)
        if(rnd === 1)
          return color.c1;
        else if(rnd === 2)
          return color.c2;
        else return '#000';
      }
    )

    const Texts = () => split_text.map((text, index) => 
      <Text style={[styles.mainParagraph, {color: split_colors[index], fontFamily: font}]}>
         {text}
      </Text>
    )

    return(
      <View style={{flex: 1, flexDirection:'row', alignContent:'center', justifyContent : 'center'}}>
        <Texts />
      </View>
    )
  }

  splitLines = text => {
    return text.split('#').map((elem, index) => ({key: index.toString(), text: elem}));
  }

  render() {
    const { TextName } = this.props;
    return (
      <View style = {styles.container}>
          <Text numberOfLines={1} style={styles.title}>{TextName}</Text>
          <View style={styles.rowExercise}>

              <View style={styles.options_container}>
                  <TouchableOpacity onPress={() => this.setState({color: color_options[0]})} style={styles.bubble}><LinearGradient colors={[color_options[0].c1, color_options[0].c2]} style={styles.gradient} /></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({color: color_options[1]})} style={styles.bubble}><LinearGradient colors={[color_options[1].c1, color_options[1].c2]} style={styles.gradient} /></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({color: color_options[2]})} style={styles.bubble}><LinearGradient colors={[color_options[2].c1, color_options[2].c2]} style={styles.gradient} /></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({color: color_options[3]})} style={styles.bubble}><LinearGradient colors={[color_options[3].c1, color_options[3].c2]} style={styles.gradient} /></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({color: color_options[4]})} style={styles.bubble}><LinearGradient colors={[color_options[4].c1, color_options[4].c2]} style={styles.gradient} /></TouchableOpacity>
              </View>

              <View style={{flex: 6}}>
                  <FlatList
                      data={this.splitLines(this.textToShow)}
                      renderItem={({item,index}) => this.Text(item, index)}
                  />
              </View>
              
              <View style={styles.options_container}>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[0]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[0]}]}>F</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[1]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[1]}]}>F</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[2]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[2]}]}>F</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[3]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[3]}]}>F</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[4]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[4]}]}>F</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({font: font_options[5]})} style={styles.bubble}><Text style={[styles.fontBubble, {fontFamily: font_options[5]}]}>F</Text></TouchableOpacity>
              </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
  },
  rowExercise: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bubble: {
    height: 0.08*width,
    width: 0.08*width,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 0.04*width,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
    overflow:'hidden'
  },
  gradient: {
    flex: 1,
    borderRadius: 0.04*width,
  },
  fontBubble:{
    fontSize: 16,
    textAlign: 'center'
  },
  options_container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title:{
    color:'black',
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    fontSize : 24,
    marginBottom: 20
  },
  text:{
    color:'black',
    marginLeft: 0.05 * width,
    marginRight: 0.1 * width,
  },
  mainParagraph: {
    fontSize: 20, 
    textAlign: 'center',
    letterSpacing: 1,
  }
})