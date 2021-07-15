import React, { useState }from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from './styles';
import { EventProps } from '../../components/Event'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { DetailsEvent } from '../../components/DetailsEvent';
import { Button } from '../../components/Button';


type RootStackParamList = {
  event: EventProps;  
};


type Props = StackScreenProps<RootStackParamList, 'event'>;

export function Details({ route }: Props) {

  const navigation = useNavigation();
  const { event } = route.params;

  function teste(){
    navigation.navigate('Payment', { event: event});
  }
  
  return (
    <View style={styles.container}> 
      {console.log('Dados: ' + event.name)}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.bottonBack}
          onPress={()=> navigation.goBack()}
        >
          <Feather
            name="arrow-left-circle"
            size={30}
            color='white'              
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Detalhes</Text>
      </View>
         
      <View style={styles.content}>
        
        <DetailsEvent
          data={event}
        />        
        
        <Button 
        style={styles.button}
        title={"Comprar"}
        onPress={teste}
        />
      </View>
      
    </View>
  );
}