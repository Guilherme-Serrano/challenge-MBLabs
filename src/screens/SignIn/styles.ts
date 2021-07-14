import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary100,
    },
    image: {
        width: '50%',
        height: 220,
    },
    content: {
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: theme.colors.heading,
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 150        
    }

})

