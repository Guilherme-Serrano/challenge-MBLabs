import React, { useState }from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from './styles';
import { EventProps } from '../../components/Event'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';


type RootStackParamList = {
  event: EventProps;  
};

type MyState = { value: string };

type Props = StackScreenProps<RootStackParamList, 'event'>;

export function Details({ route }: Props) {

  const navigation = useNavigation();
  const { event } = route.params;

  function teste(){
    navigation.navigate('Payment', { event: event});
  }
  
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}
      showsVerticalScrollIndicator={false}
    > 
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
        
        <Image
          source={{uri: event.image}}
          style={styles.image}
        
        />

        <View style={styles.text}>
          <Text style={styles.title}>Título: {event.name}</Text>
          <Text style={styles.title}>Organizador: {event.organizer}</Text>
          <Text style={styles.title}>Data: {event.date}</Text>
          <Text style={styles.title}>Preço: R${event.price}</Text>
          <Text style={styles.title}>Local: {event.local}</Text>
          <Text style={styles.title}>Descrição: {event.description}</Text>           
        </View>
         
         <Button 
          style={styles.button}
          title={"Comprar"}
          onPress={teste}
         />

      </View>
    </ScrollView>
  );
}