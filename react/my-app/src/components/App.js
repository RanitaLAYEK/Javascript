import React,{useEffect, useState}from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  //render a list in react
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setcontacts]=useState([]);
  
const AddContactHandler=(contact)=>{
   console.log(contact);
   setcontacts([...contacts,contact]);
}

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

return (
    <div className='ui container'> 
    <Header />
    <AddContact AddContactHandler={AddContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  )
  
}
export default App;
