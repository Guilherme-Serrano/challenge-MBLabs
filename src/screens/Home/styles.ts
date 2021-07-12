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
       
    },
    subHeader: {
        borderColor: 'yellow',
        borderWidth: 2,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    location: {
        flexDirection: 'row'
    },
    titleSubHeader: {
        fontSize: 20,
        color: theme.colors.heading,
        marginLeft: 10
    },
    content:{
        backgroundColor: theme.colors.heading,
        width: '100%',
        height: '100%',
    },
    category: {
        width: '100%',
        paddingTop: 10,                     
    },
    eventList: {
        marginTop: 20,
        alignItems: 'center',
    },
    titleEventList: {
        color: theme.colors.secondary100,
        fontSize: 25
    }

})

