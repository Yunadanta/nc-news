import React, { useState, useEffect } from 'react';
import { formatQuery } from './Utils/query-format';
import { fetchArticles } from './Api';
import SearchResults from './SearchResults';

const SearchConvert = (props) => {
  const [newTerm, setNewTerm] = useState('');
  const [changedTerm, setChangedTerm] = useState(false);

  const query = formatQuery(props.location.search);

  const { option, term } = query;

  useEffect(() => {
    fetchArticles()
      .then((response) => {
        return response;
      })
      .then((data) => {
        return data.filter((article) => article.title === term);
      })
      .then((result) => {
        return result.length > 0 ? result[0].article_id : term;
      })
      .then((alteredTerm) => {
        setNewTerm(alteredTerm);
        setChangedTerm(true);
      });
  }, []);

  return (
    <>
      {changedTerm ? (
        <div>
          <SearchResults key="results" option={option} term={newTerm} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchConvert;
