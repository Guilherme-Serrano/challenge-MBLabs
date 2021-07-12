import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { theme } from '../../global/styles/theme';

export function Home() {
  const [category, setCategory] = useState('');
  const [search, setsearch] = useState(false);

  function handleSearch(){
    search ? setsearch(false) : setsearch(true);    
  }

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  
  return (
    <View style={styles.container}>
         <View style={styles.header}>
            <Header/>
         </View>
         <View style={styles.subHeader}>
            
            {
                search ?
                <TextInput
                    placeholder="Escreva sua pesquisa..."
                    style={styles.titleSubHeader}
                    placeholderTextColor={theme.colors.heading}
                    autoFocus={true}
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
           <CategorySelect
              categorySelected={category}
              setCategory={handleCategorySelect}              
           />
         </View>
    </View>
  );
}