import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles';

import { EventProps } from '../Event';

type Props = RectButtonProps & {
  data: EventProps;
  Modal?: boolean;
}

export function MyEvent({data, Modal=false, ...rest}: Props) {

  return (
    <RectButton 
      style={styles.container}
      {...rest}
    > 
      <View style={styles.event}>
        <Image
            source={{uri: data.image}}
            style={styles.image}
        />
        <Text style={styles.titleEvent}>{data.name}</Text>
      </View>
    </RectButton>
  );
}