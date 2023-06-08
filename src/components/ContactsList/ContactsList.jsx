import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/ContactsList/ContactsList.module.css'

const ContactsList = ({ contacts, remoteContact }) => (
    <ul className={style.contacts__list}>
        {contacts.map(({ id, name, number }) => (
            <li className={style.contacts__item} key={id}>
                <p>
                    {name}: {number}
                </p>
                <button
                    type="button"
                    onClick={() => remoteContact(id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
  );
  
  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    remoteContact: PropTypes.func.isRequired,
  };
  
  export default ContactsList;