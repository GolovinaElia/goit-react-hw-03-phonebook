import React, { Component } from 'react';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id: uuidv4(), name: name, number: number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={style.container}>
        <form className={style.containerForm} onSubmit={this.handleSubmit}>
          <label className={style.containerLabel}>
            Name
            <input
              className={style.input}
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.containerLabel}>
            Number
            <input
              className={style.input}
              type="tel"
              autoComplete="off"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
