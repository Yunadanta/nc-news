import React, { useState, useEffect } from 'react';
import SearchResultsCard from './SearchResultsCard';
import Loading from './Loading';
import { fetchSearchedContent } from './Api';

const SearchResults = ({ option, term }) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSearchedContent(option, term)
      .then((response) => {
        return response;
      })
      .then((result) => {
        setContent(result);
        setLoading(false);
      });
  }, [option]);

  return loading ? (
    <Loading item={option} />
  ) : (
    <section id={option}>
      <SearchResultsCard key={term} content={content} option={option} />
    </section>
  );
};

export default SearchResults;
