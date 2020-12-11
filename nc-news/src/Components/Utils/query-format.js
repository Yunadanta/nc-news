export const formatQuery = (queryStr) => {
  const strSplit = queryStr.split('?option=').join('').split('&term=');

  const option = strSplit[0];

  const term = strSplit[1].split('%20').join(' ');

  return { option: option, term: term };
};
