
     function  Put(values){
      let a =JSON.stringify(values);
      console.log(a);
    fetch(`https://addressapi1.herokuapp.com/addressbook/`, {
    method: 'post',
    mode :'no-cors',
    cache:'no-cache',
    credentials:'same-origin',
    headers: {
      Accept: 'application/json',
    'Content-Type' : 'application/json',
  },
  body :JSON.stringify({
    fname:"asasa",
  }),
}
    );}
function  Update(values, id){
    fetch(`https://addressapi1.herokuapp.com/addressbook/${id}`, {
    method: 'PATCH',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  body: JSON.stringify({
    fname: `${values.first_name}`,
    lanme: `${values.last_name}`,
    email: `${values.email}`,
    phnum: `${values.Ph_numer}`,
    DOB:   `${values.DOB}`,
    note: `${values.note}`,
    cust:''
  })
});}
export {Put,Update};
