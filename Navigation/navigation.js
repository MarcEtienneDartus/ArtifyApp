import { 
    createStackNavigator, 
    createBottomTabNavigator, 
    createAppContainer,
    BottomTabBar
} from 'react-navigation';

import React from 'react'

import Login from '../Views/Register/Login';
import Signup from '../Views/Register/Signup'; 

import Home from '../Views/Home/Home';
import Exercise from '../Views/Exercise/Exercise';
import UserProfile from '../Views/UserProfile/UserProfile';

import Letter from '../Views/Letter/Letter';
import Syllable from '../Views/Syllable/Syllable';
import Word from '../Views/Word/Word';

import LectureExercise from '../Views/LectureExercise/LectureExercise';
import Success from '../Views/Success/Success';
import WritingScreen from '../Views/WritingScreen/WritingScreen';

import { CustomTabBar } from '../Components';
import Colors from '../shared/Colors';

const HomeStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Letter: {
        screen: Letter,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Syllable: {
        screen: Syllable,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Word: {
        screen: Word,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
})

HomeStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let tabBarVisible = true;
    let swipeEnabled = true;
    if (routeName !== 'Home') {
        tabBarVisible = false;
        swipeEnabled = false;
    }
    return {
        tabBarVisible, 
        swipeEnabled,
    };
}

const ExerciseStack = createStackNavigator({
    Exercise: {
        screen: Exercise,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    WritingScreen: {
        screen: WritingScreen,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    LectureExercise: {
        screen : LectureExercise,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    },
    Success: {
        screen: Success,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    }
})


ExerciseStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let tabBarVisible = true;
    let swipeEnabled = true;
    if (routeName !== 'Exercise') {
        tabBarVisible = false;
        swipeEnabled = false;
    }
    return {
        tabBarVisible, 
        swipeEnabled,
    };
}

const UserStack = createStackNavigator({
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            header: null,
            animationEnabled: true,
        }
    }
})

UserStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let tabBarVisible = true;
    let swipeEnabled = false;
    if (routeName !== 'UserProfile') {
        tabBarVisible = false;
        swipeEnabled = true;
    }
    return {
        tabBarVisible, 
        swipeEnabled,
    };
}

const NavigatorStack = createBottomTabNavigator({
    UserProfile: {
        screen: UserStack,
    },
    Home: {
        screen: HomeStack,
    },
    Exercise: {
        screen: ExerciseStack,
    },
    }, 
    {
        initialRouteName: 'Home',
        tabBarComponent: props => <CustomTabBar {...props} />,
    }
)

const AppRoot = createAppContainer(NavigatorStack);

export default AppRoot;


// export const createRootNavigator = (signedIn = false) => {
//     return createSwitchNavigator({
//         SignedIn: {
//             screen: SignedInStack,
//         },
//         SignedOut: {
//             screen: SignedOutStack,
//         }
//     }, 
//     {
//         initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
//     })
// }