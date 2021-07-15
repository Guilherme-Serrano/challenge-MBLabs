import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles';

export type EventProps = {
  id: string;
  name: string;
  category: string;
  organizer: string;
  local: string;
  date: string;
  price: string
  description: string;
  image: string;
}

type Props = RectButtonProps & {
  data: EventProps;  
}

export function Event({data, ...rest}: Props) {

  return (
    <RectButton
      {...rest}
    >
        <View style={styles.event}>
          <Image
              source={{uri: data.image}}
              style={styles.image}
          />
          <Text style={styles.titleEvent}>{data.name}</Text>
          <Text style={styles.organizer}>{data.organizer}</Text>
        </View>
    </RectButton>
  );
}