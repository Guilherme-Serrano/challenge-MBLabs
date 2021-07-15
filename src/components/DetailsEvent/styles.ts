import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    content: {
        width: 400,                       
        alignItems: 'center'              
    },
    image: {
        width: 400,
        height: 300,        
    },
    text: {
        paddingHorizontal: 20,
        marginBottom: 20
    },        
    title:{
        fontSize: 20,
        marginTop: 10,
        color: theme.colors.heading,
        textAlign: 'justify'
    },    
    container: {
        marginBottom: 20,
        marginTop: 20,
        height: 550,       
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
    }  

})

