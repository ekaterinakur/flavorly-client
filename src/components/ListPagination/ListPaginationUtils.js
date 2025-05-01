const getRangeBetweenNumbers = (from, to, step = 1) => {
  const getRangeBetweenNumbers = [];

  while (from <= to) {
    getRangeBetweenNumbers.push(from);
    from += step;
  }

  return getRangeBetweenNumbers;
};

export const getPaginateStructure = (totalPages, currentPage) => {
  const pageSibling = 1;

  const totalNumbers = pageSibling * 2 + 1;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    let pagesOutput = [];

    const leftBound = currentPage - pageSibling;
    const rightBound = currentPage + pageSibling;
    const beforeLastPage = totalPages - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pagesOutput = getRangeBetweenNumbers(startPage, endPage);

    const singleDisplacementDiscontinuity =
      totalNumbers - pagesOutput.length - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;

    if (leftSpill && !rightSpill) {
      const extraPages = getRangeBetweenNumbers(
        startPage - singleDisplacementDiscontinuity,
        startPage - 1
      );
      pagesOutput = ['ellipsis', ...extraPages, ...pagesOutput];
    } else if (!leftSpill && rightSpill) {
      const extraPages = getRangeBetweenNumbers(
        endPage + 1,
        endPage + singleDisplacementDiscontinuity
      );
      pagesOutput = [...pagesOutput, ...extraPages, 'ellipsis'];
    } else if (leftSpill && rightSpill) {
      pagesOutput = ['ellipsis', ...pagesOutput, 'ellipsis'];
    }

    return [1, ...pagesOutput, totalPages];
  }

  return getRangeBetweenNumbers(1, totalPages);
};
