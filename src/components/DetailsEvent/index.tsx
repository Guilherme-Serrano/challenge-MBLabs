import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from './styles';

import { EventProps } from '../Event'

type Props = {
  data: EventProps;  
};

export function DetailsEvent({ data }: Props) {

  return (
       
    <View style={styles.container}>
      <ScrollView>
      <Image
        source={{uri: data.image}}
        style={styles.image}      
      />

      <View style={styles.text}>
        <Text style={styles.title}>Título: {data.name}</Text>
        <Text style={styles.title}>Organizador: {data.organizer}</Text>
        <Text style={styles.title}>Data: {data.date}</Text>
        <Text style={styles.title}>Preço: R${data.price}</Text>
        <Text style={styles.title}>Local: {data.local}</Text>
        <Text style={styles.title}>Descrição: {data.description}</Text>           
      </View>
      </ScrollView>
    </View>
  );
}