import PropTypes from 'prop-types';
import { Button, Item } from './ContactListEl.styled';

export const ContactListEl = ({ name, number }) => {
  return (
    <Item>
      {name}: {number}
      <Button type="button">Delete</Button>
    </Item>
  );
};

ContactListEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
