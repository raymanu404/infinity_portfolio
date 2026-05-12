export const convertToPathURI = (path: string | string[]): string => {
  let result = '';

  if (Array.isArray(path)) {
    result = path.join('/');
  } else {
    result = path;
  }

  return `/${result}`;
};

export const sanitizeSectionToURL = (title: string) =>
  title.charAt(0).toLowerCase() +
  title
    .substring(1)
    .replaceAll(/[A-Z]/g, '-$&')
    .replaceAll(' ', '-')
    .replaceAll('--', '-')
    .toLocaleLowerCase();
