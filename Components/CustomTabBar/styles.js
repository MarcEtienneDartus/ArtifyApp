import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../shared/Colors';

const { width, height } = Dimensions.get('window');
const tabWidth = width / 3;

const styles = StyleSheet.create({
    tabsContainer: {
        width: width,
        height: 0.08 * height,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        zIndex: 1,
        backgroundColor:'white',
    },
    absoluteShadow:{
        position:'absolute',
        bottom: 0, 
        left: 0,
        width: width,
        height: 0.09 * height,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowColor: '#000',
        elevation: 2,
        shadowOpacity: 1.0,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    tab: {
        flex: 1,
        height: 0.08 * height,
        alignItems:'center',
        justifyContent:'center',
    },
    userIcon: {
        position:'absolute',
        left: 30    
    },
    messagesIcon: {
        position: 'absolute',
        right: 28,
    },
    label:{
        fontFamily:'FiraBold',
        fontSize: 10,
    }
})

export default styles;