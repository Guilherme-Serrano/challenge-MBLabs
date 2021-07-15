import React, { useState, useEffect }from 'react';
import { 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

import { EventProps } from '../../components/Event'
import { Button } from '../../components/Button';
import { tickets } from './tickets';

type RootStackParamList = {
  event: EventProps;  
};

type Props = StackScreenProps<RootStackParamList, 'event'>;

export function Payment({ route }: Props) {
  const navigation = useNavigation();
  const [numberTickets, setNumberTickets] = useState('1');
  const [typeTickets, setTypeTickets] = useState('2');
  const [price, setPrice] = useState('');
  const { event } = route.params;

  function data(){
    alert('Quantidade de ingressos: ' + numberTickets + 
    '\n' + 'Tipo de ingresso: ' + typeTickets + 
    '\n' + 'Preço total: R$' + price );
  }

  function calc(){
    let price: number;
    let number: number;

    number = parseFloat(numberTickets);
        
    if(numberTickets === ''){
      setPrice('00.00');
    }else if(typeTickets === '1'){      
      price = (event.price/2)*number;
      setPrice(price.toFixed(2).toString());      
    }else {
      price = event.price*number;
      setPrice(price.toFixed(2).toString());      
    }    
  }

  useEffect(() =>{    
    calc();    
  })
  
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}
      showsVerticalScrollIndicator={false}
    > 
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.bottonBack}
          onPress={()=> navigation.goBack()}
        >
          <Feather
            name="arrow-left-circle"
            size={30}
            color='white'              
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Pagamento</Text>
      </View>
         
      <View style={styles.content}>

        <Image
          source={{uri: event.image}}
          style={styles.image}
        
        />

        <View style={styles.text}>
          <Text style={styles.title}>Título: {event.name}</Text>
          <Text style={styles.title}>Organizador: {event.organizer}</Text>
          <Text style={styles.title}>Preço(unitário): R${event.price}</Text>
          <Text style={styles.title}>Data: {event.date}</Text>
          <Text style={styles.title}>Local: {event.local}</Text>                    
        </View>        

      </View>
      <View style={styles.AreaDetailsTicket}>
        
        <View style={styles.detailsTicket}>
          <Text style={styles.titleDetails}>Quantidade de incressos:</Text>
          <View style={[styles.areaPicker, { width: 170 }]}>
            <Picker
              style={styles.picker}
              selectedValue={""}
              onValueChange={(item)=>{                
                setNumberTickets(item)
              }}
              mode={"dropdown"}
              dropdownIconColor={theme.colors.heading}
            >
              {
                tickets.map(cr => {
                  return <Picker.Item key={cr} label={cr} value={cr}/>
                })
              }             
            </Picker>
          </View>         
        </View>

        <View style={styles.select}>
          <Text style={styles.titleDetails}>Tipo de ingresso:</Text>
          <View style={[styles.areaPicker, { width: 170 }]}>
            <Picker
              style={styles.picker}
              selectedValue={""}
              onValueChange={(item)=>{
                setTypeTickets(item)
              }}
              mode={"dropdown"}
              dropdownIconColor={theme.colors.heading}
            >
              <Picker.Item label={"Inteira"} value={'2'}/>
              <Picker.Item label={"Meia Entrada"} value={'1'}/>              
            </Picker>
          </View>

          <Text style={styles.titleDetails}>Preço Total: R${price}</Text>
        </View>
                
        <Button 
          style={styles.button}
          title={"Comprar"}
          onPress={data}
        />
      </View>
      
    </ScrollView>
  );
}