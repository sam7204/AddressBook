import React ,{useEffect, useState }from "react";
import {View,Text,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import {Style} from '../styles/Style';
import { SearchBar } from 'react-native-elements';
export default  function  Search({navigation}){
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [text,setText]=useState();
  let arrayholder = data;
  function searchFilterFunction (text) { 
    const newData = arrayholder.filter(item => {      
      const itemData = `${item.fname.toUpperCase()}`
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    setText(text);
    setData(newData);
  };
  
  useEffect(() => {
    fetch('https://addressapi1.herokuapp.com/addressbook')
    .then((response) => response.json())
    .then((json) => setData(json),
    )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])
  return(
    <View style={Style.container}>
    <SearchBar
        placeholder="Type Here..."
        autoCapitalize="none"
          autoCorrect={false}
          value={text}
          clearButtonMode="always"
          onChangeText={(text) =>searchFilterFunction(text)}
           />
     {isLoading ? <ActivityIndicator/> : (
      <FlatList
        numColumns={2}
    keyExtractor={(item) => item.id} 
    data={data}
    renderItem={({ item }) => ( 
        <TouchableOpacity style={Style.item} onPress={()=>navigation.navigate('ViewUser',item)}>
      <Text>{item.fname}{item.lanme}</Text>
      </TouchableOpacity>
    )}
    />
     )}
    </View>
);
}