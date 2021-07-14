import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: theme.colors.secondary100,
    },
    header: {
       borderColor: theme.colors.heading,
       borderBottomWidth: 2,
       marginTop: getStatusBarHeight() + 26,       
    },
    content: {
        borderColor: "red",
        borderWidth: 2,
        flex: 1,
    },
    event: {
        borderColor: "green",
        borderWidth: 2,
        width: '100%'
    }

})

