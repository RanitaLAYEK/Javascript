import React,{useState}from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  //render a list in react
  const [contacts,setcontacts]=useState([]);
  

  return (
    <div className='ui container'> 
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>
    </div>
  )
  
}
export default App;
