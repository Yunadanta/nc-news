export const formatQuery = (queryStr) => {
  const strSplit = queryStr.split('?option=').join('').split('&term=');

  return { option: strSplit[0], term: strSplit[1] };
};
