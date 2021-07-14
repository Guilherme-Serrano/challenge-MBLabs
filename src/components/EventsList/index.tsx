import React, { useEffect, useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import { styles } from './styles';

import { api } from '../../services/api'
import { Event } from '../Event';
import { ModalView } from '../ModalView';
import { EventProps } from '../Event';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

export function EventsList() {
  const navigation = useNavigation();
  const [events, setEvents] = useState(null);
  const [openEventModal, setOpenEventModal] = useState(false);
  const [eventSelected, setEventSelected] = useState<EventProps>({} as EventProps);  

  const getApi = async () => {
    try {
      const response = await api.get('events');
      if(events == null){        
        setEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() =>{    
    
    getApi();   
  })

  function teste(){
    alert('teste');
    console.log("MyEvents");
  }

  function handleOpenEvent(event: EventProps){   
       
    navigation.navigate('Payment', { event: event});
    
  }
  
  function handleCloseEvent(){
    setOpenEventModal(false);
  }
  
  return (
    <View style={styles.container}>
        <FlatList
          data={events}
          keyExtractor={item=> item.id.toString()}
          renderItem={ ({item}) => 
            <Event 
              data={item}
              onPress={()=>handleOpenEvent(item)}              
            />
             
          }
          horizontal
        />
      
    </View>
  );
}