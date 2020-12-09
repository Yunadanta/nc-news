import axios from 'axios';

const ncNewsAPI = axios.create({
  baseURL: 'http://yunadanta-nc-news.herokuapp.com/api',
});

export const fetchArticles = (sort) => {
  return ncNewsAPI
    .get('/articles', { params: sort })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticle = (id) => {
  return ncNewsAPI.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchComments = (id) => {
  console.log(id);
  return ncNewsAPI
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
