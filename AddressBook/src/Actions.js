
     function  Put(values){
    fetch('https://127.0.0.1:500/addressbook', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fname:'values.fname',
    lanme:'values.lanme',
    email:'values.email',
    phnum:'values.Phnum',
    DOB:'values.DOB',
    note:'values.note',
    cust:''
  })
});}
function  Update(values){
    fetch(`https://127.0.0.1:500/addressbook/${values.id}`, {
    method: 'PATCH',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fname:'values.fname',
    lanme:'values.lanme',
    email:'values.email',
    phnum:'values.Phnum',
    DOB:'values.DOB',
    note:'values.note',
    cust:''
  })
});}
export {Put,Update};
