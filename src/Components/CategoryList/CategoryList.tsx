import { NavLink } from 'react-router-dom';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const CategoryList = () => {
  return (
    <div className='text-center mt-3 mb-5'>
    <DropdownButton id="dropdown-basic-button" title="Categories">
      <Dropdown.Item as={NavLink} to="/">All</Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/quotes/star-wars">Star Wars</Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/quotes/famous-people">Famous People</Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/quotes/saying">Saying</Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/quotes/humour">Humour</Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/quotes/motivational">Motivational</Dropdown.Item>
    </DropdownButton>
    </div>
  );
};

export default CategoryList;
