import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Asset } from 'expo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../shared/Colors';

const { width, height } = Dimensions.get('window');

export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lastName: '',
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  renderInputs = (lastName, name, email, password, passwordConfirm) => (
    <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            value={lastName}
            onChange={lastName => this.setState({ lastName })}
            placeholder='Nom...                         '
            underlineColorAndroid={Colors.lightgray}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            value={name}
            onChange={name => this.setState({ name })}
            placeholder='Prénom...                      '
            underlineColorAndroid={Colors.lightgray}
          />
        </View>
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
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            value={passwordConfirm}
            onChange={passwordConfirm => this.setState({ passwordConfirm })}
            placeholder='Confirmation du mot de passe...'
            underlineColorAndroid={Colors.lightgray}
          />
        </View>
    </View>
  )

  renderButton = () => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.Signup()} style={styles.buttonValidate}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
    </View>
  )

  renderReturn = () => (
    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.goBack}>
      <Icon 
        name='chevron-left' 
        size={34} 
        color='#fff' />
    </TouchableOpacity>
  )

  Signup = () => {
    this.props.navigation.navigate('Home')
  }

  render() {

    const { lastName, name, email, password, passwordConfirm } = this.state;

    return (
      <View style={styles.container}>

          {this.renderReturn()}

          <Image style={styles.image} source={require('../../assets/icon.png')} />

          {this.renderInputs(lastName, name, email, password, passwordConfirm)}

          {this.renderButton()}
          
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
    height: 0.5 * height,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputWrapper: {
    width: 0.7 * width,
    height: 0.06 * height, 
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#eee',
    margin: 8,
  },
  input: {
    color: Colors.mediumgray,
    fontSize: 18, 
    fontFamily: 'FiraRegular',
    padding: 10,
  },
  buttonContainer: {
    height: 0.1 * height,
    width: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    width: width* 0.1,
    height: width* 0.1,
    borderRadius: width* 0.1 / 2,
    backgroundColor: Colors.lightgray,
    position:'absolute',
    top: 20,
    left: 20,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonValidate: {
    borderRadius: 100,
    backgroundColor: Colors.green,
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
});
