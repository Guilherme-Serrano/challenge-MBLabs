import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        borderWidth: 2,
        borderColor: theme.colors.secondary100      
    },
    category: {
        flexDirection: 'row',        
        justifyContent: 'space-between',
        alignItems: 'center'        
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    title: {
        
    }
    

})

