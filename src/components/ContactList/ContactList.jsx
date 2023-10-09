import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListEl key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};
