import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: getStatusBarHeight(),               
    },
    content: {
        width: '100%',                       
        alignItems: 'center',
        marginTop: 15,                    
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,                
    },
    titleHeader:{
        fontSize: 25,        
        color: theme.colors.heading,
        marginLeft: 100,                     
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
    },
    bottonBack: {
        marginLeft: 20,        
    }

})

