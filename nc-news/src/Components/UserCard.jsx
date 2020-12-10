import React, { useState, useEffect } from 'react';
import '../CSS/User.css';
import { fetchComments, fetchArticles } from './Api';
import UserArticlesCard from './UserArticlesCard';
import UserCommentsCard from './UserCommentsCard';
import Loading from './Loading';

const UserCard = (user) => {
  const { username, avatar_url, name } = user[0];

  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        const filterArticles = data.filter(
          (article) => article.author === username
        );
        setArticles(filterArticles);
        setArticlesLoading(false);
        return data;
      })
      .then((data) => {
        return data.map((article) => {
          return fetchComments(article.article_id);
        });
      })
      .then((response) => {
        return Promise.all(response);
      })
      .then((comments) => {
        return comments.map((article) => {
          const correctComments = article.filter((comment) => {
            return comment.author === username;
          });

          return correctComments;
        });
      })
      .then((correctedComments) => {
        const actualComments = correctedComments.filter(
          (article) => article.length > 0
        );

        const comments = correctedComments.flat();

        setComments(comments);
        setCommentsLoading(false);
      });
  }, [username]);

  return (
    <section id="user">
      <h3>{`${username}`}</h3>
      <img src={avatar_url} alt={`${username}'s avatar.`} />
      <p>Name: {name}</p>
      <ul>
        Published:
        <li>
          {articlesLoading
            ? 'Calculating articles... '
            : `${articles.length} articles. `}
          <button
            type="button"
            className="userButton"
            onClick={() => setShowArticles(!showArticles)}
          >
            {showArticles ? (
              <p className="buttonText">Hide Articles</p>
            ) : (
              <p className="buttonText">Show Articles</p>
            )}
          </button>
          <ul>
            {showArticles ? (
              articlesLoading ? (
                <Loading item="articles" />
              ) : (
                articles.map((article) => {
                  return (
                    <UserArticlesCard key={article.article_id} {...article} />
                  );
                })
              )
            ) : (
              <></>
            )}
          </ul>
        </li>
        <li>
          {commentsLoading
            ? 'Calculating comments... '
            : `${comments.length} comments. `}
          <button
            type="button"
            className="userButton"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? (
              <p className="buttonText">Hide Comments</p>
            ) : (
              <p className="buttonText">Show Comments</p>
            )}
          </button>
          <ul>
            {showComments ? (
              commentsLoading ? (
                <Loading item="comments" />
              ) : (
                comments.map((comment) => {
                  return (
                    <UserCommentsCard key={comment.comment_id} {...comment} />
                  );
                })
              )
            ) : (
              <></>
            )}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default UserCard;
