import React from 'react';
import '../CSS/Header.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <>
      <h1>
        <Link to={'/articles'} className="headerLink">
          Northcoders News
        </Link>
      </h1>
      <hr />
    </>
  );
};

export default Header;
