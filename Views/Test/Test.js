import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { ScreenOrientation } from 'expo';
import Signature from 'react-native-signature-canvas';

const { width, height } = Dimensions.get('window');
 
export default class SignatureScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signature: null,
                   text : "Juice",
                 };
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
    alert("OK")
  };
 
  render() {
    const style = `.m-signature-pad--footer
    .button {
      background-color: #90FF74;
      color: #FFF;
    }`;
    return (

      <View style={{ flex: 1 }}>

        <View style = {styles.testView}>
            <Text style = {styles.text}>{this.state.text}</Text>
        </View>

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
  testView:{
      position: 'absolute',
    //   top: -width*0.25,
      alignSelf: 'center',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      fontFamily: 'Clicker',
      fontSize: 220,
      letterSpacing:2,
      opacity: 0.15,
  }
});