import React, { useEffect, useState } from "react";
import uuid4 from "uuid4";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const localStorageKey = "contact";

  // Initialize state with an empty array if localStorage is null or invalid
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    const initialState = savedContacts ? JSON.parse(savedContacts) : [];
    console.log("Initial contact state:", initialState);
    return Array.isArray(initialState) ? initialState : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    const newContact = { id: uuid4(), data };
    console.log("Adding contact:", newContact);
    setContact((prevContacts) => {
      if (!Array.isArray(prevContacts)) {
        console.error("Previous contacts state is not an array:", prevContacts);
        return [newContact];
      }
      return [...prevContacts, newContact];
    });
  };

  const removeContact = (id) => {
    console.log("Removing contact with id:", id);
    const updatedList = contact.filter((val) => val.id !== id);
    setContact(updatedList);
  };

  return (
    <div className="body">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
