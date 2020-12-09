import React, { useState, useEffect } from 'react';
import { fetchArticles } from './Api';
import SortOptions from './SortOptions';
import ArticlesCard from './ArticlesCard';
import Loading from './Loading';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({ sort_by: 'created_at', order: 'desc' });

  useEffect(() => {
    fetchArticles(query).then((data) => {
      const limitData = data.slice(0, limit);
      setArticles(limitData);
      setLoading(false);
    });
  }, [query, limit, articles]);

  return loading ? (
    <Loading item="articles" />
  ) : (
    <section id="articlesList">
      <SortOptions />
      <ul>
        {articles.map((article) => {
          return <ArticlesCard key={article.article_id} {...article} />;
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
