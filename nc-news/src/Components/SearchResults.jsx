import React, { useState, useEffect } from 'react';
import SearchResultsCard from './SearchResultsCard';
import { formatDate } from './Utils/date-format';
import { formatQuery } from './Utils/query-format';
import { fetchArticles, fetchSearchedContent } from './Api';

const SearchResults = (props) => {
  const [content, setContent] = useState({});
  const [articles, setArticles] = useState([]);

  const query = formatQuery(props.location.search);

  let { option, term } = query;

  if (option === 'articles') {
    fetchArticles()
      .then((data) => {
        setArticles(data);
      })
      .then(() => {
        const correctArticle = articles.filter(
          (article) => article.title === term
        );
        if (correctArticle.length > 0) {
          term = correctArticle[0].article_id;
        }
      });
  }
  useEffect(() => {
    fetchSearchedContent(option, term).then((data) => {
      console.log(data);
      // return data[0];
    });
    // .then((response) => {
    //   setContent(response);
    // });
  }, []);

  return <div></div>;
};

export default SearchResults;
