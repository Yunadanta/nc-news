import React, { useState, useEffect } from 'react';
import { formatDate } from './Utils/date-format';
import { fetchArticles, deleteComment } from './Api';
import { Link } from '@reach/router';

const UserCommentsCard = ({
  comment_id,
  article_id,
  body,
  created_at,
  votes,
  index,
  setComments,
  comments,
}) => {
  const [articleName, setArticleName] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        return data;
      })
      .then((articles) => {
        const neededArticle = articles.filter(
          (article) => article.article_id === article_id
        );
        setArticleName(neededArticle[0].title);
      });
  }, [article_id]);

  const readableDate = formatDate(created_at);

  const handleCommentDeletion = (id) => {
    deleteComment(id).then(() => {
      setComments([...comments.slice(0, index), ...comments.slice(index + 1)]);
    });
  };

  return (
    <li className="userCommentsCard">
      <p className="userCommentsCardDetails">{body}</p>
      <p className="userCommentsCardDetailsInline">
        Article:{' '}
        <Link to={`/articles/${article_id}`} className="cardLinks">
          {articleName}
        </Link>
      </p>
      <span className="userCommentsCardDetailsInline">
        Posted on: {readableDate}
      </span>
      <span className="userCommentsCardDetailsInline">Votes: {votes}</span>
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

export default UserCommentsCard;
