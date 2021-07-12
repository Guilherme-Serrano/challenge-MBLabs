import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <Image
          source={{uri: "https://github.com/Guilherme-Serrano.png"}}
          style={styles.picture}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
              Bem Vindo, Guilherme
          </Text> 
        </View>
    </View>
  );
}