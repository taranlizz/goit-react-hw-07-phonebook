import PropTypes from 'prop-types';
import { Button, Item } from './ContactListEl.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ContactListEl = ({ id, name, number }) => {
  const isDisabled = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        disabled={isDisabled}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactListEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
