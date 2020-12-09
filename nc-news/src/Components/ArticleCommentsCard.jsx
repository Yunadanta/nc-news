import React from 'react';
import { Link } from '@reach/router';
import '../CSS/Article.css';

const ArticleCommentsCard = ({
  article_id,
  comment_id,
  author,
  body,
  created_at,
  votes,
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
    <li className="articleCommentsCard">
      <p className="articleCommentsCardDetails">
        Author:{' '}
        <Link to={`/users/${author}`} className="cardLinks">
          {author}
        </Link>
      </p>
      <p className="articleCommentsCardDetails" id="commentBody">
        {body}
      </p>
      <p className="articleCommentsCardDetails">Created: {readableDate}</p>
      <p className="articleCommentsCardDetails">
        Votes: {votes}{' '}
        <button type="button" className="voteUpButton">
          Up Vote!
        </button>
      </p>
    </li>
  );
};

export default ArticleCommentsCard;
