import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Event from '../../assets/event.png';

import { Button } from '../../components/Button';



export function SignIn() {
  const navigation = useNavigation();
  
  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        
        <Image 
            source={Event} 
            style={styles.image}
            resizeMode="stretch"
        />

        <View style={styles.content}>
            <Text style={styles.text}>
                Busque seus eventos favoritos
                de empresas e universidades
            </Text>

            <Button 
              title="SignIn" 
              onPress={handleSignIn}
            />    
        </View>    
    </View>
  );
}