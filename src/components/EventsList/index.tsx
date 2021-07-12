import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from './styles';

import { api } from '../../services/api'
import { Event } from '../Event';

export function EventsList() {
  
  const [events, setEvents] = useState(null); 

  const getApi = async () => {
    try {
      const response = await api.get('events');
      if(events == null){
        console.log('Entrei');
        setEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    console.log('Dados2:' + events);
  }

  useEffect(() =>{    
    
    getApi();   
  })
  
  return (
    <View style={styles.container}>
        <FlatList
          data={events}
          keyExtractor={item=> item.id.toString()}
          renderItem={ ({item}) => <Event data={item}/> }
          horizontal
        />
    </View>
  );
}