import React from 'react';
import { Link } from '@reach/router';

const TopicsArticlesCard = ({ article_id, title, author, votes }) => {
  return (
    <li className="topicsArticlesList">
      <h3>
        <Link to={`/articles/${article_id}`} className="cardLinks">
          {title}
        </Link>
      </h3>
      <p className="topicsArticlesDetails">
        Author:{' '}
        <Link to={`/users/${author}`} className="cardLinks">
          {author}
        </Link>
      </p>
      <p className="topicsArticlesDetails">Votes: {votes}</p>
    </li>
  );
};

export default TopicsArticlesCard;
