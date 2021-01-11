import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'lightgrey'
},
item: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 15,
    padding: 20,
    backgroundColor: '#594AE8',
    fontSize: 15,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 10,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
    backgroundColor:'#ddd'
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});