import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { MyEvent } from '../../components/MyEvent';



export function MyEvents() {
  const events = [
    { 
      id: '1',
      name: "Desafio da Microsoft",
      category: "Empresa",
      organizer: "Microsoft",
      date: "17/08/2021",
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
      local: "São Paulo - SP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus risus lacus, vitae dictum nibh euismod id. In congue ornare ligula eget sagittis. Nam laoreet facilisis nulla, sed suscipit dui vulputate sed. Maecenas condimentum pulvinar magna ut lobortis. Duis non ultricies diam. Duis commodo gravida est eu efficitur.",
      image: "https://i.imgur.com/jhZGFNR.png"
    },
  ]
  
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
                />
                
              }              
            />
         </View>
    </View>
  );
}