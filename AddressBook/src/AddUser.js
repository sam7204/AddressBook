import React from 'react'; 
import {Button, TextInput, ScrollView,Text,View} from 'react-native';
import {Style} from '../styles/Style';
import { Formik } from 'formik';
import * as yup from 'yup';
const reviewSchema = yup.object({
  first_name : yup.string()
    .required('Reqiured'),
  last_name: yup.string(),
  email: yup.string().email()
  .required('Required'),
  Ph_number: yup.number()
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
 .required('Required'),
  note:yup.string(),
  DOB:yup.date()
  .required('Required'),
});
export default function AddUser({add}){
  function add(values){
    let a =parseInt(values.Ph_number);
    try{
    fetch(`https://addressapi1.herokuapp.com/addressbook`, {
    method: 'POST',
    mode :'no-cors',
    headers: {
      Accept: 'application/json',
     'Content-Type' : 'application/json',
      },
       body :JSON.stringify({
          fname: `${values.first_name}`,
          lanme:`${values.last_name}`,
          phnum:`${a}`,
          email:`${values.email}`,
          DOB:`${values.DOB}`,
          note:`${values.note}`
         }),
       }
       );}
       catch(e){
       console.log("error");
       }
  }
  return (
    <ScrollView style={Style.container}>
      <Formik
        initialValues={{ first_name: '', last_name:'', email:'',Ph_number:'',note:'',DOB:''}}
        validationSchema={reviewSchema}
        onSubmit={(values,actions) => {
          add(values);
          actions.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              style={Style.input}
              placeholder='First Name'
              onChangeText={props.handleChange('first_name')}
              value={props.values.first_name}
            />
            <Text style={Style.errorText}>{props.touched.first_name && props.errors.first_name}</Text>
            <TextInput
              style={Style.input}
              placeholder='Last Name'
              onChangeText={props.handleChange('last_name')}
              value={props.values.last_name}
            />
             <Text style={Style.errorText}>{props.touched.last_name && props.errors.last_name}</Text>
            <TextInput
              style={Style.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
             <Text style={Style.errorText}>{props.touched.email && props.errors.email}</Text>
            <TextInput 
              style={Style.input}
              placeholder='Phone number'
              onChangeText={props.handleChange('Ph_number')}
              value={props.values.Ph_number}
              keyboardType='numeric'
            />
             <Text style={Style.errorText}>{props.touched.Ph_number && props.errors.Ph_number}</Text>
            <TextInput
              style={Style.input}
              placeholder='Date Of Birth (mm/dd/yyyy)'
              onChangeText={props.handleChange('DOB')}
              value={props.values.DOB}
            />   
             <Text style={Style.errorText}>{props.touched.DOB && props.errors.DOB}</Text>
            <TextInput
              style={Style.input}
              multiline
              placeholder='Notes'
              onChangeText={props.handleChange('note')}
              value={props.values.note}
            />
             <Text style={Style.errorText}>{props.touched.note && props.errors.note}</Text>
         <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </ScrollView>
    
  );
}
