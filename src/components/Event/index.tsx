import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';
/*
export type EventProps = {
  id: string;
  name: string;
  Organizer: string;
  Local: string;
  Date: string;

}
*/

export type EventProps = {
  id: string;
  nome: string;
  sinopse: string;
  foto: string;
}
type Props = {
  data: EventProps;
}

export function Event({data}: Props) {

  return (
    <View style={styles.container}>
        
        <View style={styles.event}>
          <Image
            source={{ uri: data.foto }}
            style={styles.image}
          />

          <Text>{data.nome}</Text>
        </View>
        {console.log(data.foto)}
    </View>
  );
}