import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from './styles';

import { api } from '../../services/api'
import { Event } from '../Event';

export function EventsList() {
  
  const [events, setEvents] = useState(null); 

  useEffect(() =>{    
    
    
    async function teste(){
      console.log('Dados:');
      const response = await api.get('/r-api/?api=filmes');
      if(events == null){
        console.log('Entrei');
        setEvents(response.data);
      }
      console.log('Dados2:' + response.data);
    }

    teste();
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