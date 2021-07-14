import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: getStatusBarHeight(),                
    },
    content: {
        flex: 1,                       
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 10,        
        borderWidth: 2,
        borderColor: theme.colors.heading,
        borderRadius: 8,
        marginHorizontal: 5            
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
               
    },
    titleHeader:{
        fontSize: 25,
        color: theme.colors.heading,
        marginLeft: 90        
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderColor: theme.colors.heading,
        borderWidth: 1        
    },
    text: {
        paddingHorizontal: 20,        
    },        
    title:{
        fontSize: 15,        
        lineHeight: 30,
        color: theme.colors.heading,
        textAlign: 'justify',
        
    },   
    button: {
        width: 200,
        height: 56,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 120,
        marginBottom: 20 
    },
    bottonBack: {
        marginLeft: 20,        
    },
    AreaDetailsTicket: {
        alignItems: 'center',        
        marginTop: 10
    },
    detailsTicket: {        
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 20
    },
    titleDetails: {
        fontSize: 20,        
        lineHeight: 30,
        color: theme.colors.heading,       
    }, 
    textInput: {
        backgroundColor: theme.colors.heading,
        width: 40,
        height: 40,
        borderRadius: 8,
        marginLeft: 10,
        textAlign: 'center',
        color: theme.colors.secondary100
    },
    select: {
        alignSelf: 'flex-start',       
        paddingLeft: 10,
        marginBottom: 20               
    },
    areaPicker: {
        height: 40,
        borderColor: theme.colors.heading,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        marginBottom: 70
    },
    picker: {        
        color: theme.colors.heading,
        borderWidth: 2,
        borderColor: theme.colors.heading
    }

})

