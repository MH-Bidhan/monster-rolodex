const paginate = (array, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const pageContent = [];
  for (let item of array) {
    if (array.indexOf(item) >= startIndex && array.indexOf(item) < lastIndex) {
      pageContent.push(item);
    }
  }
  return pageContent;
};

export default paginate;
