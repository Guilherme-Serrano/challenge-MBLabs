import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { api } from '../../services/api'
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { Event, EventProps } from '../../components/Event';

export function Home() {
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [search, setsearch] = useState(false);  
  const [events, setEvents] = useState(null);
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  
  const getApi = async () => {
    try {
      const response = await api.get('events');
      if(events == null){        
        setEvents(response.data);
        setList(response.data);
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
    
    if (searchText === ''){
      setList(events)
    }else{
      setList(events.filter((item: EventProps)=>{
        if(item.name.indexOf(searchText) > -1) {
          return true;
        }else{
          return false;
        }
      }))
    }  
  },[searchText])

  useEffect(() =>{
    if (category === ''){
      setList(events)
    }else{
      console.log(category)
      setList(events.filter((item: EventProps)=>{
        if(item.category === category) {
          return true;
        }else{
          return false;
        }
      }))
    } 
  }, [category])

  function handleSearch(){
    search ? setsearch(false) : setsearch(true);    
  }  

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleOpenEvent(event: EventProps){   
       
    navigation.navigate('Details', { event: event});
    
  }
  
  
  
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Header
              title={"Bem vindo, Guilherme"}
            />
          </View>         
          <View style={styles.subHeader}>
            
            {
                search ?
                <TextInput
                    placeholder="Escreva sua pesquisa..."
                    style={styles.titleSubHeader}
                    placeholderTextColor={theme.colors.heading}
                    autoFocus={true}
                    value={searchText}
                    onChangeText={(text)=> setSearchText(text)}
                />
                :                
                <View style={styles.location}>
                  <Feather
                    name="map-pin"
                    size={25}
                    color='white'              
                  />
                  <Text style={styles.titleSubHeader}>Jundiaí</Text>
                </View>
            } 

            <TouchableOpacity onPress={handleSearch}>
                <Feather
                  name="search"
                  size={30}
                  color='white'              
                />              
            </TouchableOpacity>
          </View>         

          <View style={styles.content}>
            <View style={styles.category}>
              <CategorySelect
                  categorySelected={category}
                  setCategory={handleCategorySelect}              
              /> 
              <View style={styles.eventList}>
                <Text style={styles.titleEventList}>Eventos</Text>
                <View>
                  {
                    loading ?
                    <ActivityIndicator color={theme.colors.secondary100} size={40}  style={styles.loading}/>
                    :
                    <FlatList
                      data={list}
                      keyExtractor={item=> item.id.toString()}
                      renderItem={ ({item}) => 
                        <Event 
                          data={item}
                          onPress={()=>handleOpenEvent(item)}              
                        />
                        
                      }
                      horizontal
                    />
                  }      
                </View>   
              </View>          
            </View>
          </View>
    </View>
  );
}  
