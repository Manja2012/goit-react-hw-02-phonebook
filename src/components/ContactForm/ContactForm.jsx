
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from 'components/ContactForm/contactForm.module.css'

export class ContactForm extends Component {
  
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state); 
    this.setState({ name: '', number: '' }); 
  };

  render() {
    return (
      <div className={style.border}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className={style.label}>Name</label>
          <input
              id={this.nameInputId}
              className={style.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          <label htmlFor={this.numberInputId} className={style.label}>Number</label>
          <input
              id={this.numberInputId}
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          <button className={style.button} type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;