import React from 'react';
import { Link } from '@reach/router';
import '../CSS/Article.css';
import { formatDate } from './Utils/date-format';

const ArticleCommentsCard = ({
  article_id,
  comment_id,
  author,
  body,
  created_at,
  votes,
}) => {
  const readableDate = formatDate(created_at);

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
