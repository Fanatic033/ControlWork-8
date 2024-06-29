import {NavLink} from 'react-router-dom';

const CategoryList = () => {
  return (
    <>
      <ul className={'fs-5 list-group'}>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">All</NavLink></li>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">Star Wars</NavLink></li>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">Famous People</NavLink></li>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">Saying</NavLink></li>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">Humour</NavLink></li>
        <li className="list-group-item"><NavLink to={''} className="text-decoration-none">Motivational</NavLink></li>
      </ul>
    </>
  );
};

export default CategoryList;