import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        width: '100%',
        height: 90,        
        flexDirection: 'row'
    },
    picture: {
        width: 48,
        height: 48,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 4
    },
    content: {
        width: '100%',        
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    title: {
        color: theme.colors.heading,
        fontSize: 20
    }
})

