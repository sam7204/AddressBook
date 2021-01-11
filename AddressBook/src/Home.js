import React ,{useEffect, useState }from "react";
import {View,Text,FlatList,TouchableOpacity,ActivityIndicator,Alert} from 'react-native';
import {Style} from '../styles/Style';
export default  function  Home({ navigation }){
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:5000/addressbook')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])
  function Delete(item){
    Alert.alert(
       `${item.title}`,
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
          fetch(`http://127.0.0.1:5000/addressbook/${item.id}`,{ 
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }
          )
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
          <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        />
         )}
        </View>
    );
}