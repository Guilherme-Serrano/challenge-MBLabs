import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableOpacity } from 'react-native';

import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: ()=> void;
}

export function ModalView({children, closeModal, ...rest}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.bar}>
            <TouchableOpacity onPress={closeModal}>
              <Feather
                name="chevron-down"
                color={theme.colors.heading}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}