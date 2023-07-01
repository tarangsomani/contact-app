import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import AddContact from "./AddContact";




function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Tarang",
  //     email: "tarang@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Umang",
  //     email: "umang@gmail.com"
  //   }
  // ]
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
