import React from 'react';
import '../CSS/Articles.css';

const ArticlesSortOptions = ({
  query: { sort_by, order },
  setQuery,
  setLimit,
  articlesLength,
}) => {
  return (
    <div className="sortOptions">
      <label htmlFor="sort">
        <span className="sortBy">Sort by: </span>
        <select
          name="sort"
          className="optionsBoxes"
          onChange={(event) =>
            setQuery({ sort_by: event.target.value, order: order })
          }
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
          className="optionsBoxes"
          onChange={(event) =>
            setQuery({ sort_by: sort_by, order: event.target.value })
          }
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </label>

      <label htmlFor="limit">
        <span className="limit">Limit: </span>
        <select
          name="limit"
          className="optionsBoxes"
          onChange={(event) => setLimit(event.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value={articlesLength}>All</option>
        </select>
      </label>
      <hr />
    </div>
  );
};

export default ArticlesSortOptions;
