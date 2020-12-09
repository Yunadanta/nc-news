import React from 'react';
import { Link } from '@reach/router';
import '../CSS/Articles.css';

const ArticlesCard = ({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  comment_count,
}) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayDate = new Date(created_at).getDate();
  const month = monthNames[new Date(created_at).getMonth()];
  const year = new Date(created_at).getFullYear();
  const readableDate = `${dayDate} ${month} ${year}`;

  return (
    <li className="articlesCard">
      <h3>
        <Link to={`/articles/${article_id}`} className="cardLinks">
          {title}
        </Link>
      </h3>
      <span className="articlesCardDetails">Topic: {topic}</span>
      <span className="articlesCardDetails">
        Author:{' '}
        <Link to={`/users/${author}`} className="cardLinks">
          {author}
        </Link>
      </span>
      <p className="articlesCardDetails" id="articlesBody">
        {body}
      </p>
      <p className="articlesCardDetails">Created: {readableDate}</p>
      <p className="articlesCardDetails">
        Votes: {votes}{' '}
        <button type="button" className="voteUpButton">
          Up Vote!
        </button>
      </p>
      <p className="articlesCardDetails"># of Comments: {comment_count}</p>
    </li>
  );
};

export default ArticlesCard;
