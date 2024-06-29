import {NavLink} from 'react-router-dom';

const CategoryList = () => {
  return (
    <>
      <ul className={'fs-5 list-group'}>
        <li><NavLink to={''}>All</NavLink></li>
        <li><NavLink to={''}>Star Wars</NavLink></li>
        <li><NavLink to={''}>Famous People</NavLink></li>
        <li><NavLink to={''}>Saying</NavLink></li>
        <li><NavLink to={''}>Humour</NavLink></li>
        <li><NavLink to={''}>Motivational</NavLink></li>
      </ul>
    </>
  );
};

export default CategoryList;