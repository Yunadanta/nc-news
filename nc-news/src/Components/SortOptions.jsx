import React from 'react';

const SortOptions = ({ setQuery, setLimit }) => {
  return (
    <div>
      <label htmlFor="sort">
        <span>Sort by: </span>
        <select
          name="sort"
          onChange={(event) => setQuery({ sort_by: event.target.value })}
        >
          <option value="created_at">Date posted</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
          <option value="title">Title</option>
        </select>
      </label>

      <label htmlFor="order">
        <select
          name="order"
          onChange={(event) => setQuery({ order: event.target.value })}
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </label>

      <label htmlFor="limit">
        <span>Limit: </span>
        <select
          name="limit"
          onChange={(event) => setLimit({ order: event.target.value })}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="">All</option>
        </select>
      </label>
      <hr />
    </div>
  );
};

export default SortOptions;
