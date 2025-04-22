export const convertToPathURI = (path: string | string[]): string => {
  let result = '';

  if (Array.isArray(path)) {
    result = path.join('/');
  } else {
    result = path;
  }

  return `/${result}`;
};
