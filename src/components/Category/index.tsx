import React from 'react';
import { View, Text,  Image } from 'react-native';
import { RectButton, RectButtonProps, } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: string;
  checked: boolean;
}

export function Category({title, icon, checked = false, ...rest}: Props) { 
  return (
    <RectButton {...rest}>
      <View style={[styles.container, {opacity: checked ? 1 : 0.4}]}>
        <View style={styles.category}>
          <Image
            source={icon}
            style={styles.image}
          />
          <Text style={styles.title}> {title} </Text>
        </View>
      </View>
    </RectButton>
  );
}