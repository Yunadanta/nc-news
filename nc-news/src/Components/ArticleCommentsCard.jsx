import React from 'react';
import { Link } from '@reach/router';
import '../CSS/Article.css';
import { formatDate } from './Utils/date-format';
import { deleteComment } from './Api';

const ArticleCommentsCard = ({
  article_id,
  comment_id,
  author,
  body,
  created_at,
  votes,
  setComments,
  comments,
  index,
}) => {
  const readableDate = formatDate(created_at);

  const handleCommentDeletion = (id) => {
    deleteComment(id).then(() => {
      setComments([...comments.slice(0, index), ...comments.slice(index + 1)]);
    });
  };

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
      <br />
      <button
        type="button"
        className="deleteButton"
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this comment?'))
            handleCommentDeletion(comment_id);
        }}
      >
        ❌ Delete Comment ❌
      </button>
    </li>
  );
};

export default ArticleCommentsCard;
