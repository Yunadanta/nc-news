import React from 'react';
import '../CSS/Navbar.css';
import { Link } from '@reach/router';

const Navbar = () => {
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
            <select name="searchOptions" id="searchOptions">
              <option value="articles">Article</option>
              <option value="topics">Topic</option>
              <option value="comments">Comment</option>
              <option value="users">User</option>
            </select>
          </label>
          <label htmlFor="searchTerm" className="navElements">
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              placeholder="Search Term"
              required
            ></input>
          </label>
          <button type="submit" className="navElements">
            <span id="searchIcon">🔎</span>
          </button>
        </form>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
