import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export type EventProps = {
  id: string;
  name: string;
  category: string;
  organizer: string;
  local: string;
  date: string;
  description: string;
  image: string;
}

/*
export type EventProps = {
  id: string;
  nome: string;
  sinopse: string;
  foto: string;
}
*/

type Props = {
  data: EventProps;
}


export function Event({data}: Props) {

  return (
    <View style={styles.container}>
        
        <View style={styles.event}>
          <Image
              source={{uri: data.image}}
              style={styles.image}
          />

          <Text style={styles.titleEvent}>{data.name}</Text>
          <Text style={styles.organizer}>Organizador: {data.organizer}</Text>
        </View>
        {console.log('Image: '+data.organizer)}
    </View>
  );
}