export const makePaginationList = (
  targetList: Array<object>,
  showItemCount: number,
) => {
  const PagenationList = [];
  for (let i = 0; i < targetList.length; i += showItemCount) {
    PagenationList.push(targetList.slice(i, i + showItemCount));
  }
  return PagenationList;
};
