import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
}

export function Header({title}: Props) {
  return (
    <View style={styles.container}>
        <Image
          source={{uri: "https://github.com/Guilherme-Serrano.png"}}
          style={styles.picture}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
              {title}
          </Text> 
        </View>
    </View>
  );
}