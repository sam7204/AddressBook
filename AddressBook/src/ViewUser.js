import React ,{ useState }from "react";
import {View,Text} from 'react-native';
import {Style} from '../styles/Style';
export default function ViewUser({navigation, route}){
  const item =route.params;
  return(
<View style={Style.container}>
<Text style={Style.input}>{item.title}</Text>
<Text style={Style.input}>{item.lanme}</Text>
<Text style={Style.input}>{item.email}</Text>
<Text style={Style.input}>{item.Phnum}</Text>
<Text style={Style.input}>{item.DOB}</Text>
<Text style={Style.input}>{item.note}</Text>
</View>
);
}