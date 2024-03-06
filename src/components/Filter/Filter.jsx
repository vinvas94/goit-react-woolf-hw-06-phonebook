import { getFilter, setFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Container>
  );
};

export default Filter;
