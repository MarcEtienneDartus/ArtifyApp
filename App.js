import React, { Component } from 'react'
import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import AppRoot from './Navigation/navigation';
import { AppLoading, Font as expoFont, Asset } from 'expo';
import { AsyncStorage } from "react-native";

cacheFonts = fonts => {
  return fonts.map(font => expoFont.loadAsync(font));
}

cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image); //fetched images web
    } 
    else {
      return Asset.fromModule(image).downloadAsync(); //local images
    }
  });
}
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      assetsLoaded: false,
      isSignedIn: false,
    }
  }

  componentDidMount(){
    this.SetAsyncStorage()
  }

  async SetAsyncStorage(){
    await AsyncStorage.setItem('ScoreLettres', '0.89');
    await AsyncStorage.setItem('ScoreSyllabes', '0.61');
    await AsyncStorage.setItem('ScoreMots', '0.42');
    await AsyncStorage.setItem('ScoreEcriture', '0.15');
    await AsyncStorage.setItem('DailyScore', '1');
  }

  async loadAssetsAsync(){

    const imageAssets = cacheImages([
      require('./assets/facebook.png'),
      require('./assets/google.png'),
      require('./assets/icon.png'),
      require('./assets/letters.png'),
      require('./assets/star.png'),
      require('./assets/syll.png'),
      require('./assets/words.png'),
    ]);
      
    const fontAssets = cacheFonts([{
      PoppinsBlack: require('./assets/Fonts/Poppins/Poppins-Black.ttf'),
      PoppinsXBold: require('./assets/Fonts/Poppins/Poppins-ExtraBold.ttf'),
      PoppinsBold: require('./assets/Fonts/Poppins/Poppins-Bold.ttf'),
      PoppinsSBold: require('./assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
      PoppinsMedium: require('./assets/Fonts/Poppins/Poppins-Medium.ttf'),
      PoppinsRegular: require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
      PoppinsLight: require('./assets/Fonts/Poppins/Poppins-Light.ttf'),
      PoppinsXLight: require('./assets/Fonts/Poppins/Poppins-ExtraLight.ttf'),
      PoppinsThin: require('./assets/Fonts/Poppins/Poppins-Thin.ttf'),

      FiraBlack: require('./assets/Fonts/Fira_Sans/FiraSans-Black.ttf'),
      FiraXBold: require('./assets/Fonts/Fira_Sans/FiraSans-ExtraBold.ttf'),
      FiraItalic: require('./assets/Fonts/Fira_Sans/FiraSans-Italic.ttf'),
      FiraBold: require('./assets/Fonts/Fira_Sans/FiraSans-Bold.ttf'),
      FiraSBold: require('./assets/Fonts/Fira_Sans/FiraSans-SemiBold.ttf'),
      FiraMedium: require('./assets/Fonts/Fira_Sans/FiraSans-Medium.ttf'),
      FiraRegular: require('./assets/Fonts/Fira_Sans/FiraSans-Regular.ttf'),
      FiraLight: require('./assets/Fonts/Fira_Sans/FiraSans-Light.ttf'),
      FiraXLight: require('./assets/Fonts/Fira_Sans/FiraSans-ExtraLight.ttf'),
      FiraThin: require('./assets/Fonts/Fira_Sans/FiraSans-Thin.ttf'),
      
      Clicker: require('./assets/Fonts/Clicker/ClickerScript-Regular.ttf'),
    }]);
    await Promise.all([...imageAssets, ...fontAssets]);
  }

  renderStatusBar = () => (
    Platform.OS === 'ios' ? 
      <StatusBar barStyle="light-content" /> 
      : 
      null
  )

  renderMain = assetsLoaded => (  
    assetsLoaded ? 
      <AppRoot />
      //<Lecture/>
      :
      <AppLoading
            startAsync={this.loadAssetsAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
        />
  )

  getLayout = assetsLoaded => (
    <View style={styles.container}>
        <SafeAreaView 
            style={[styles.container, { marginTop: StatusBar.currentHeight}]} 
            forceInset={{ top: Platform.OS === 'ios' ? 'always' : 'never' }}
          >
              {this.renderStatusBar()}

              {this.renderMain(assetsLoaded)}
        </SafeAreaView>
    </View>
  )


  render() {
    const { assetsLoaded } = this.state; 
    return(this.getLayout(assetsLoaded));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
})
