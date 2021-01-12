import React ,{useEffect, useState }from "react";
import {View,Text,FlatList,TouchableOpacity,ActivityIndicator,Alert} from 'react-native';
import {Style} from '../styles/Style';

export default  function  Home({ navigation }){
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    fetch('https://addressapi1.herokuapp.com/addressbook')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    });
    return () => {
      unsubscribe;
    };
  },[navigation])

  function Delete(item){
    Alert.alert(
       `${item.fname} ${item.lanme}`,
      "????",
      [
        {
          text: "update",
          onPress:()=>navigation.navigate('UpdateUser',item)
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () =>{
          setLoading(true);
          fetch(`https://addressapi1.herokuapp.com/addressbook/${item.id}`,{ 
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }
          )
          .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
        }}
      ],
      { cancelable: false }
    );

  }
     return(
       <View style={Style.container}>
         {isLoading ? <ActivityIndicator/> : (
          <FlatList
            numColumns={2}
        keyExtractor={(item) => item.id} 
        data={data} 
        renderItem={({ item }) => ( 
            <TouchableOpacity style={Style.item} onPress={()=>navigation.navigate('ViewUser',item)} onLongPress={()=>Delete(item)}>
          <Text>{item.fname} {item.lanme}</Text>
          </TouchableOpacity>
        )}
        />
         )}
        </View>
    );
}