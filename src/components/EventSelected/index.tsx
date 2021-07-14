import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';


import { styles } from './styles';
import { EventProps } from '../Event'


type Props = {
  data: EventProps;
  Modal?: boolean;
  buyTicket?: ()=> void;
}

export function EventSelected({data, Modal=false, buyTicket}: Props) {
  
  
  function teste(){
    alert('teste');
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}
    >     
      <View style={styles.content}>
        
        <Image
          source={{uri: data.image}}
          style={styles.image}
        
        />

        <View style={styles.text}>
          <Text style={styles.title}>Título: {data.name}</Text>
          <Text style={styles.title}>Organizador: {data.organizer}</Text>
          <Text style={styles.title}>Data: {data.date}</Text>
          <Text style={styles.title}>Local: {data.local}</Text>
          <Text style={styles.title}>Descrição: {data.description}</Text> 
        </View>
         
      </View>
    </ScrollView> 
    
  );
}