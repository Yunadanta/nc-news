import React, { useState, useEffect } from 'react';
import { fetchArticles } from './Api';
import ArticlesSortOptions from './ArticlesSortOptions';
import ArticlesCard from './ArticlesCard';
import Loading from './Loading';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState('5');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({ sort_by: 'created_at', order: 'desc' });
  const [articlesLength, setArticlesLength] = useState(0);

  useEffect(() => {
    console.log(query);
    console.log(limit);
    fetchArticles(query).then((data) => {
      setArticlesLength(data.length);
      const limitData = data.slice(0, limit);
      setArticles(limitData);
      setLoading(false);
    });
  }, [query, limit]);

  return loading ? (
    <>
      <Loading item="articles" />
    </>
  ) : (
    <section id="articlesList">
      <ArticlesSortOptions
        query={query}
        setQuery={setQuery}
        setLimit={setLimit}
        articlesLength={articlesLength}
      />
      <ul>
        {articles.map((article) => {
          return <ArticlesCard key={article.article_id} {...article} />;
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
