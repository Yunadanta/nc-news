import React, { useState, useEffect } from 'react';
import { formatDate } from './Utils/date-format';
import { fetchArticles } from './Api';
import { Link } from '@reach/router';

const UserCommentsCard = ({
  comment_id,
  article_id,
  body,
  created_at,
  votes,
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
      <button type="button" className="deleteButton">
        ❌ Delete Comment ❌
      </button>
    </li>
  );
};

export default UserCommentsCard;
