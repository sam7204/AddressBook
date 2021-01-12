import React ,{useEffect, useState }from "react";
import {View,Text,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import {Style} from '../styles/Style';
import { SearchBar } from 'react-native-elements';
import filter from 'lodash.filter';
export default  function  Search({navigation}){
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [text,setText]=useState('');
  const [fullData, setFullData] = useState([]);
   const handleSearch = text => {
     const filteredData = fullData.filter( user => {
       console.log(fullData);
       const itemData = `${user.fname.toUpperCase()}`
         const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;  
     });
     setData(filteredData);
     setText(text);
   };
  useEffect(() => {
    setLoading(true);
    fetch('https://addressapi1.herokuapp.com/addressbook')
    .then((response) => response.json())
    .then(json => {
      setData(json);
      setFullData(json);
    })
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
          onChangeText={qtext =>handleSearch(qtext)}
           />
     {isLoading ? <ActivityIndicator/> : (
      <FlatList
        numColumns={2}
    keyExtractor={(item) => item.id} 
    data={data}
    renderItem={({ item }) => ( 
        <TouchableOpacity style={Style.item} onPress={()=>navigation.navigate('ViewUser',item)}>
      <Text>{item.fname} {item.lanme}</Text>
      </TouchableOpacity>
    )}
    />
     )}
    </View>
);
}