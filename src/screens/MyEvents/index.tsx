import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { DetailsEvent } from '../../components/DetailsEvent';
import { ListDivider } from '../../components/ListDivider';
import { ModalView } from '../../components/ModalView';
import { EventProps } from '../../components/Event';
import { MyEvent } from '../../components/MyEvent';
import { Header } from '../../components/Header';

export function MyEvents() {
  const [ openEventModal, setOpenEventModal ] =  useState(false);
  const [ event, setEvent ] =  useState<EventProps>({} as EventProps);
  
  const events = [
    { 
      id: '1',
      name: "Desafio da Microsoft",
      category: "Empresa",
      organizer: "Microsoft",
      date: "17/08/2021",
      price: "100.00",
      local: "São Paulo - SP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus risus lacus, vitae dictum nibh euismod id. In congue ornare ligula eget sagittis. Nam laoreet facilisis nulla, sed suscipit dui vulputate sed. Maecenas condimentum pulvinar magna ut lobortis. Duis non ultricies diam. Duis commodo gravida est eu efficitur.",
      image: "https://i.imgur.com/AQBlJ8P.png"
    },
    { 
      id: '2',
      name: "Evento da Apple",
      category: "Empresa",
      organizer: "Apple",
      date: "05/11/2021",
      price: "150.00",
      local: "São Paulo - SP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus risus lacus, vitae dictum nibh euismod id. In congue ornare ligula eget sagittis. Nam laoreet facilisis nulla, sed suscipit dui vulputate sed. Maecenas condimentum pulvinar magna ut lobortis. Duis non ultricies diam. Duis commodo gravida est eu efficitur.",
      image: "https://i.imgur.com/jhZGFNR.png"
    },    
  ]

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
            <FlatList
              data={events}
              keyExtractor={item=> item.id}
              renderItem={ ({item}) => 
                <MyEvent
                  data={item}
                  onPress={()=>handleOpenEvent(item)}
                />                
              }
              ItemSeparatorComponent={()=> <ListDivider/>}
              showsVerticalScrollIndicator = {false}             
            />
         </View>

         <ModalView visible={openEventModal} closeModal={handleCloseEvent}>
              <DetailsEvent
                data={event}
              />
         </ModalView>
    </View>
  );
}