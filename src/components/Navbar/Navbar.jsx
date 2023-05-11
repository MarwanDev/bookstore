import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <a className="logo" href="/">Bookstore CMS</a>
      </div>
      <ul className="links-container">
        {[{
          id: 1,
          path: '/',
          text: 'BOOkS',
        },
        {
          id: 2,
          path: '/categories',
          text: 'CATEGORIES',
        },
        ].map((link) => (
          <li key={link.id}>
            <NavLink className="nav-link" to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <PersonIcon className="person-icon" color="#0290ff" />
    </nav>
  );
}

export default Navbar;
