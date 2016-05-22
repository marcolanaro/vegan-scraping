export const lastPath = (link) => {
  const splitted = link.split('/');
  const l = splitted.length;
  if (splitted[l - 1] === '') {
    return splitted[l - 2];
  }
  return splitted[l - 1];
};
