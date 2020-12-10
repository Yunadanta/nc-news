import React from 'react';
import { formatDate } from './Utils/date-format';
import { Link } from '@reach/router';

const UserArticlesCard = ({
  article_id,
  title,
  topic,
  created_at,
  votes,
  comment_count,
}) => {
  const readableDate = formatDate(created_at);

  return (
    <li className="userArticlesList">
      <h3>
        <Link to={`/articles/${article_id}`} className="cardLinks">
          {title}
        </Link>
      </h3>
      <span className="userArticlesDetails">Published: {readableDate}</span>
      <span className="userArticlesDetails">Topic: {topic}</span>
      <br />
      <span className="userArticlesDetails">Votes: {votes}</span>
      <span className="userArticlesDetails">Comments: {comment_count}</span>
    </li>
  );
};

export default UserArticlesCard;
