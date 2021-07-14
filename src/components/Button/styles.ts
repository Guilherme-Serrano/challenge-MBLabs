import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        borderRadius: 7        
    },
    title: {
        fontSize: 25,
        color: theme.colors.secondary100,
        paddingHorizontal: 30,
        padding: 10
    }   

})

