import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import TopicsArticlesCard from './TopicsArticlesCard';
import '../CSS/Topics.css';
import { fetchArticles } from './Api';

const TopicsCard = ({ slug, description }) => {
  const [numberOfArticles, setNumberOfArticles] = useState(0);
  const [showArticles, setShowArticles] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({ sort_by: 'votes', order: 'desc' });

  useEffect(() => {
    fetchArticles(query).then((data) => {
      const filterData = data.filter((article) => article.topic === slug);
      setArticles(filterData);
      setNumberOfArticles(filterData.length);
      setLoading(false);
    });
  }, [query, slug]);

  return (
    <li className="topicsCard">
      <h3>{slug}</h3>
      <p className="topicsBody">{description}</p>
      <p className="topicsArticlesCount">
        Contains {`${numberOfArticles}`} articles.{' '}
        <button
          type="button"
          className="topicsButton"
          onClick={() => setShowArticles(!showArticles)}
        >
          {showArticles ? (
            <p className="buttonText">Hide Articles</p>
          ) : (
            <p className="buttonText">Show Articles</p>
          )}
        </button>
      </p>
      <section id="topicsArticlesCard">
        <ul id="articlesContent">
          {showArticles ? (
            loading ? (
              <Loading item="articles" />
            ) : (
              articles.map((article) => {
                return (
                  <TopicsArticlesCard key={article.article_id} {...article} />
                );
              })
            )
          ) : (
            <></>
          )}
        </ul>
      </section>
    </li>
  );
};

export default TopicsCard;
