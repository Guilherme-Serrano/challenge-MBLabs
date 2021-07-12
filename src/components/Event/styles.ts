import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        
    },
    event: {
        width: 400,
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 3,
        alignItems: 'center'        
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 15
    },
    titleEvent: {
        fontSize: 25,
        marginTop: 10,
        color: theme.colors.secondary100
    },
    organizer: {
        fontSize: 15,
        color: theme.colors.secondary100
    }  

})

