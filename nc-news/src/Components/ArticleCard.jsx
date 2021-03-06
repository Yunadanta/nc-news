import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import '../CSS/Article.css';
import { fetchComments } from './Api';
import { formatDate } from './Utils/date-format';
import ArticleCommentsCard from './ArticleCommentsCard';
import Loading from './Loading';
import AddComment from './AddComment';

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
  const [query, setQuery] = useState({ sort_by: 'votes', order: 'desc' });

  useEffect(() => {
    fetchComments(article_id, query).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [showComments, article_id, query]);

  const readableDate = formatDate(created_at);

  return (
    <section id="article">
      <h3>{title}</h3>
      <span className="articleCardDetails">Topic: {topic}</span>
      <span className="articleCardDetails">
        Author:{' '}
        {author !== 'anonymous' ? (
          <Link to={`/users/${author}`} className="cardLinks">
            {author}
          </Link>
        ) : (
          author
        )}
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
      {showComments ? <AddComment setComments={setComments} /> : <> </>}
      <section id="commentsCard">
        <ul id="commentsContent">
          {showComments ? (
            loading ? (
              <Loading item="comments" />
            ) : (
              comments.map((comment, i) => {
                return (
                  <ArticleCommentsCard
                    key={comment.comment_id}
                    {...comment}
                    setComments={setComments}
                    comments={comments}
                    index={i}
                  />
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
