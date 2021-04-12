export const parsingApiPathOptions = (path, options) => {
  const optionsResult = Object.entries(options).reduce(
    (acc, [key, value], index) => {
      const queryDelimiter = index ? '&' : '?';
      return `${acc}${queryDelimiter}${key}=${value}`;
    },
    '',
  );

  return `${path}${optionsResult}`;
};
