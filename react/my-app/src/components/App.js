import React from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  //render a list in react
  const contacts=[
    {
    id:"1",
    "name":"Raj",
    "email":"rajsen@gmail.com"
    },
    {
      id:"2",
      "name":"simran",
      "email":"simransen@gmail.com"
      }
  ];

  return (
    <div className='ui container'> 
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>
    </div>
  )
  
}
export default App;
