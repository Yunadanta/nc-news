import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link } from '@reach/router';

const Navbar = () => {
  const [term, setTerm] = useState('');
  const [option, setOption] = useState('articles');

  const handleChange = ({ target: { name, value } }) => {
    name === 'searchOptions' ? setOption(value) : setTerm(value);
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="topicsNav">
          <Link to="/topics" className="topicsLink">
            Topics
          </Link>
        </h2>
        <form className="searchNav">
          <span className="navFont">Search By:</span>
          <label htmlFor="searchOptions" className="navElements">
            <select
              name="searchOptions"
              id="searchOptions"
              onChange={(event) => handleChange(event)}
            >
              <option value="articles">Article</option>
              <option value="users">Username</option>
            </select>
          </label>
          <label htmlFor="searchTerm" className="navElements">
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              placeholder="Search Term"
              onChange={(event) => handleChange(event)}
              value={term}
              required
            ></input>
          </label>
          <button type="submit" className="navElements">
            <Link to={`/search?option=${option}&term=${term}`}>
              <span id="searchIcon">🔎</span>
            </Link>
          </button>
        </form>
        <section id="loginButtons">
          <button type="button" id="logInButton">
            Log In
          </button>
          <button type="button" id="signUpButton">
            Sign Up
          </button>
        </section>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
