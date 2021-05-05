import React, { Component } from 'react';
import style from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import contactArr from './contacts.json';

class App extends Component {
  state = {
    contacts: contactArr,
    filter: '',
  };

  addContacts = data => {
    const { name } = data;
    const { contacts } = this.state;
    const inputName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (inputName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContact();
    return (
      <div className={style.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
