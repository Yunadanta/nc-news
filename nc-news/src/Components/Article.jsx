import React, { useState, useEffect } from 'react';
import { fetchArticle } from './Api';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

const Article = ({ article_id }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentVotes, setCurrentVotes] = useState(0);

  useEffect(() => {
    fetchArticle(article_id).then((data) => {
      setArticle(data);
      setLoading(false);
      setCurrentVotes(data.votes);
    });
  }, [currentVotes, article_id]);

  return loading ? (
    <Loading item="article" />
  ) : (
    <section id="article">
      <ArticleCard key={article.article_id} {...article} />
    </section>
  );
};

export default Article;
