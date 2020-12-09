import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import '../CSS/Article.css';
import { fetchComments } from './Api';
import ArticleCommentsCard from './ArticleCommentsCard';
import Loading from './Loading';

const ArticleCard = (article) => {
  const {
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    comment_count,
  } = article[0];

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [showComments, article_id]);

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
    <section id="article">
      <h3>{title}</h3>
      <span className="articleCardDetails">Topic: {topic}</span>
      <span className="articleCardDetails">
        Author:{' '}
        <Link to={`/users/${author}`} className="cardLinks">
          {author}
        </Link>
      </span>
      <p className="articleCardDetails" id="articleBody">
        {body}
      </p>
      <p className="articleCardDetails">Created: {readableDate}</p>
      <p className="articleCardDetails">
        Votes: {votes}{' '}
        <button type="button" className="voteUpButton">
          Up Vote!
        </button>
      </p>
      <p className="articleCardDetails">
        # of Comments: {comment_count}{' '}
        <button type="button" onClick={() => setShowComments(!showComments)}>
          {showComments ? (
            <span>Hide Comments</span>
          ) : (
            <span>Show Comments</span>
          )}
        </button>
      </p>
      <section id="commentsCard">
        <ul id="commentsContent">
          {showComments ? (
            loading ? (
              <Loading item="comments" />
            ) : (
              comments.map((comment) => {
                return (
                  <ArticleCommentsCard key={comment.comment_id} {...comment} />
                );
              })
            )
          ) : (
            <></>
          )}
        </ul>
      </section>
    </section>
  );
};

export default ArticleCard;
