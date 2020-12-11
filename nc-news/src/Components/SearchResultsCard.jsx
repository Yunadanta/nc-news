import React from 'react';
import { Link } from '@reach/router';
import { formatDate } from './Utils/date-format';

const SearchResultsCard = ({ content, option }) => {
  let readableDate = null;

  if (option === 'articles') {
    readableDate = formatDate(content.article[0].created_at);
  }

  console.log(content);

  return (
    <section id={option}>
      {option === 'articles' ? (
        <>
          <h3>
            <Link
              to={`/articles/${content.article[0].article_id}`}
              className="cardLinks"
            >
              {content.article[0].title}
            </Link>
          </h3>
          <span className="resultsCardDetails">
            Topic: {content.article[0].topic}
          </span>
          <span className="resultsCardDetails">
            Author:{' '}
            {content.article[0].author !== 'anonymous' ? (
              <Link
                to={`/users/${content.article[0].author}`}
                className="cardLinks"
              >
                {content.article[0].author}
              </Link>
            ) : (
              content.article[0].author
            )}
          </span>
          <br />
          <span className="resultsCardDetails">Created: {readableDate}</span>
          <span className="resultsCardDetails">
            Votes: {content.article[0].votes}
          </span>
          <span className="resultsCardDetails">
            # of Comments: {content.article[0].comment_count}
          </span>
        </>
      ) : (
        <>
          <h3>
            <Link
              to={`/users/${content.user[0].username}`}
              className="cardLinks"
            >
              {content.user[0].username}
            </Link>
          </h3>
          <Link to={`/users/${content.user[0].username}`} className="cardLinks">
            <img
              src={content.user[0].avatar_url}
              alt={`${content.user[0].username}'s avatar.`}
            />
          </Link>
        </>
      )}
    </section>
  );
};

export default SearchResultsCard;
