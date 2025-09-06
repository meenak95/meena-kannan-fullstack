export const createPageUrl = (page) => {
  const pageMap = {
    'Portfolio': '/',
    'Skills': '/skills',
    'Experience': '/experience',
    'Contact': '/contact'
  };
  return pageMap[page] || '/';
};
