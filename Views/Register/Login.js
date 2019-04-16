import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Asset } from 'expo';
import Colors from '../../shared/Colors';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  renderInputs = (email, password) => (
    <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            value={email}
            onChange={email => this.setState({ email })}
            placeholder='Adresse Email...               '
            underlineColorAndroid={Colors.lightgray}
          />
        </View>
        
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            value={password}
            onChange={password => this.setState({ password })}
            placeholder='Mot de passe...                '
            underlineColorAndroid={Colors.lightgray}
          />
        </View>
    </View>
  )

  renderButtons = () => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.login()} style={styles.buttonValidate}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.redirectToSignup()} style={styles.buttonInscription}>
          <Text style={styles.buttonText}>S'INSCRIRE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.lostPasswordContainer}>
          <Text style={styles.lostPassword}>Mot de passe oublié</Text>
        </TouchableOpacity>
    </View>
  )

  renderProviders = () => (
    <View style={styles.providersContainer}>
        <TouchableWithoutFeedback style={styles.imageContainer} onPress={() => this.login()}>
            <Image style={styles.logoProvider} source={require('../../assets/google.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.imageContainer} onPress={() => this.login()}>
            <Image style={styles.logoProvider} source={require('../../assets/facebook.png')} />
        </TouchableWithoutFeedback>
    </View>
  )

  login = () => {
    this.props.navigation.navigate('Home')
  }

  redirectToSignup = () => {
    this.props.navigation.navigate('Signup');
  }

  render() {

    const { email, password } = this.state;

    return (
      <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/icon.png')} />

          {this.renderInputs(email, password)}

          {this.renderButtons()}

          {this.renderProviders()}
          
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.5,
    height: width * 0.45,
    resizeMode: 'cover',
    margin: height*0.05,
  },
  inputContainer: {
    width: width * 0.7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    width: 0.7 * width,
    height: 0.06 * height, 
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#eee',
    margin: 5,
  },
  input: {
    color: Colors.mediumgray,
    fontSize: 18, 
    fontFamily: 'FiraRegular',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    width: width * 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  providersContainer: {
    flex: 1,
    width: width * 0.5,
    height: 0.2*height,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonValidate: {
    borderRadius: 100,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.4*width,
    height: 40,
  },
  buttonInscription: {
    borderRadius: 100,
    backgroundColor: Colors.lightgray,
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.4*width,
    height: 40,
  },
  lostPasswordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.4*width,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'FiraBold'
  },
  lostPassword: {
    color: Colors.lightgray,
    fontSize: 14,
    fontFamily: 'FiraMedium',
    textDecorationLine: 'underline'
  },
  imageContainer: {
    flex: 1,
    height: 0.1 * height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoProvider: {
    width: width* 0.15,
    height: width* 0.15,
    borderRadius: width* 0.15 / 2,
    resizeMode: 'cover',
  },
});
