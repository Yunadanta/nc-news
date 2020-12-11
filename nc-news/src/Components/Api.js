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

export const fetchComments = (id, sort) => {
  return ncNewsAPI
    .get(`/articles/${id}/comments`, { params: sort })
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const fetchTopics = () => {
  return ncNewsAPI.get('/topics').then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchUser = (username) => {
  return ncNewsAPI.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const fetchSearchedContent = (option, term) => {
  return ncNewsAPI.get(`/${option}/${term}`).then(({ data }) => {
    return data;
  });
};
