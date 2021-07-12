import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: theme.colors.secondary100,
    },
    header: {
       borderColor: 'black',
       borderWidth: 2,
       marginTop: getStatusBarHeight() + 26,
       
    }

})

