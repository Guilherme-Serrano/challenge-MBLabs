import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        height: '100%',
        marginTop: 80,
        backgroundColor: theme.colors.secondary100,        
    },
    overlay: {
        backgroundColor:theme.colors.overlay
    },
    bar: {
        width: 39,
        height: 5,        
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 13
    }
     

})

