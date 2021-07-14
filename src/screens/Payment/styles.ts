import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: getStatusBarHeight(),
        height: 620
    },
    content: {
        width: 400,                       
        alignItems: 'center',
        marginTop: 15,              
    },
    image: {
        width: '100%',
        height: 300,        
    },
    text: {
        paddingHorizontal: 20,
    },        
    title:{
        fontSize: 20,
        marginTop: 10,
        color: theme.colors.heading,
        textAlign: 'justify'
    },   
    button: {
        width: 200,
        height: 56,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 20,
        marginBottom: 20 
    },
    bottonBack: {
        marginLeft: 20,
        marginTop: 10
    }

})

