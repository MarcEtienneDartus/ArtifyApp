import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { ScreenOrientation } from 'expo';
import Signature from 'react-native-signature-canvas';

const { width, height } = Dimensions.get('window');
const ratio = width/411.42857142857144;
 
export default class WritingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signature: null,};
    this.word = this.props.navigation.getParam("word", "No word")
  }
 
  componentWillMount() {
    this.changeScreenOrientation(ScreenOrientation.Orientation.LANDSCAPE)
  }
  componentWillUnmount() {
    this.changeScreenOrientation(ScreenOrientation.Orientation.PORTRAIT)
  }
  changeScreenOrientation(orientation) {
    ScreenOrientation.allowAsync(orientation);
  }


  handleSignature = signature => {
    this.setState({ signature });
    this.props.navigation.navigate('Success',{image:signature});
  };
 
  render() {
    const style = `.m-signature-pad--footer
    .button {
      background-color: #90FF74;
      color: #FFF;
    }`;
    return (

      <View style={{ flex: 1 }}>

        <View style = {styles.backgroundView}>
            <Text style = {styles.text}>{this.word}</Text>
        </View>

        <View style = {[styles.line,styles.l1]}></View>
        <View style = {[styles.line,styles.l2]}></View>
        <View style = {[styles.line,styles.l3]}></View>
        <View style = {[styles.line,styles.l4]}></View>

        <View style={{ flex: 1, zIndex:2 }}>
            {/* <View style={styles.preview}>
            {this.state.signature ? (
                <Image
                resizeMode={"contain"}
                style={{ width: 335, height: 114 }}
                source={{ uri: this.state.signature }}
                />
            ) : null}
            </View> */}
            <Signature
            onOK={this.handleSignature}
            descriptionText=""
            clearText="RECOMENCER"
            confirmText="CONTINUER"
            webStyle={style}
            />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10
  },
  backgroundView:{
      position: 'absolute',
    //   top: -width*0.25,
      alignSelf: 'center',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      fontFamily: 'Clicker',
      fontSize: 250*ratio,
      letterSpacing:2,
      opacity: 0.15,
  },
  line:{
    width: height*0.8,
    height: 2,
    position: 'absolute',
    alignSelf: 'center',
    zIndex:0,
    opacity: 0.5,
  },
  l1:{
    backgroundColor: "#0979FD",
    top: 60*ratio,
  },
  l2:{
    backgroundColor: "#1DFD09",
    top: 140 * ratio,
  },
  l3:{
    backgroundColor: "#1DFD09",
    top: 230*ratio,
  },
  l4:{
    backgroundColor: "#441000",
    top: 290*ratio,
  },
});