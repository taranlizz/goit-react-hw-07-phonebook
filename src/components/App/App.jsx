import { Layout } from '../LayoutComponent/Layout.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { AppTitle, ContactsTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectErrorValue, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter />
      {isLoading && !error && <div>Loading...</div>}
      <ContactList />
    </Layout>
  );
};
