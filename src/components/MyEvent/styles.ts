import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        marginVertical: 15,        
    },
    event: {
        width: 400,       
        alignItems: 'center',                
        flexDirection: 'row'        
    },
    content:{

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 15,
        marginLeft: 15
    },
    titleEvent: {
        fontSize: 25,        
        color: theme.colors.heading,
        marginLeft: 15,
        textAlignVertical: 'center'
    },
})

