import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Colors from '../../shared/Colors';

//DIMENSIONS
const { width } = Dimensions.get('window');
const tabWidth = width / 3;


const goTo = (indexToGo, currentIndex, navigation) => {
    if(currentIndex !== indexToGo){
        navigation.navigate(navigation.state.routes[indexToGo])
    }
} 

const CustomTabBar = props => {

  const { navigation } = props;
  const { index: activeRouteIndex } = navigation.state;

  return(
      <View style={styles.tabsContainer}>
          <View style={styles.absoluteShadow} />
          <TouchableOpacity 
                    key={0}
                    onPress={() => goTo(0, activeRouteIndex, navigation)}
                    style={styles.tab}
                >
                    <Icon 
                        name='account-supervisor-circle' s
                        color={activeRouteIndex === 0 ? '#000' : Colors.lightgray}
                        size={32} 
                    />
                    <Text style={[styles.label, {color: activeRouteIndex === 0 ? '#000' : Colors.lightgray}]}>Mon espace</Text>
                    
            </TouchableOpacity>

            <TouchableOpacity 
                    key={1}
                    onPress={() => goTo(1, activeRouteIndex, navigation)}
                    style={styles.tab}
            >
                    <Icon 
                        name='home' 
                        color={activeRouteIndex === 1 ? '#000' : Colors.lightgray}
                        size={32} 
                    />
                    <Text style={[styles.label, {color: activeRouteIndex === 1 ? '#000' : Colors.lightgray}]}>Home</Text>
                   
            </TouchableOpacity>

            <TouchableOpacity 
                key={2}
                onPress={() => goTo(2, activeRouteIndex, navigation)}
                style={styles.tab}
            >   
                <Icon 
                    name='aspect-ratio' 
                    color={activeRouteIndex === 2 ? '#000' : Colors.lightgray} 
                    size={32} 
                />
                <Text style={[styles.label, {color: activeRouteIndex === 2 ? '#000' : Colors.lightgray}]}>Mes exercices</Text>
                
            </TouchableOpacity> 
      </View>
  )
}

export default CustomTabBar;