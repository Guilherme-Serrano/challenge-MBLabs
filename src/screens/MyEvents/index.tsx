import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { api } from '../../services/api'

import { DetailsEvent } from '../../components/DetailsEvent';
import { ListDivider } from '../../components/ListDivider';
import { ModalView } from '../../components/ModalView';
import { EventProps } from '../../components/Event';
import { MyEvent } from '../../components/MyEvent';
import { Header } from '../../components/Header';

export function MyEvents() {
  const [ openEventModal, setOpenEventModal ] =  useState(false);
  const [ event, setEvent ] =  useState<EventProps>({} as EventProps);
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const getApi = async () => {
    try {
      const response = await api.get('events');
      if(events == null){        
        setEvents(response.data);        
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }    
  }

  useEffect(() =>{     
    if(events === null){
      getApi(); 
    }   
  })

  function handleOpenEvent(data: EventProps){
    setEvent(data);
    setOpenEventModal(true);
  }

  function handleCloseEvent(){
    setOpenEventModal(false);
  }
  
  return (
    <View style={styles.container}>
         <View style={styles.header}>
            <Header title={"Meus Eventos"}/>            
         </View>
         <View style={styles.content}>
            {
              loading ?
              <ActivityIndicator color={theme.colors.heading} size={40}  style={styles.loading}/>
              :
              <FlatList
                data={events}
                keyExtractor={item=> item.id.toString()}
                renderItem={ ({item}) => 
                  <MyEvent
                    data={item}
                    onPress={()=>handleOpenEvent(item)}
                  />                
                }
                ItemSeparatorComponent={()=> <ListDivider/>}
                showsVerticalScrollIndicator = {false}             
              />            
            }
         </View>

         <ModalView visible={openEventModal} closeModal={handleCloseEvent}>
              <DetailsEvent
                data={event}
              />
         </ModalView>
    </View>
  );
}