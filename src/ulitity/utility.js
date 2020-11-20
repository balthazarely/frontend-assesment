export const convertDate = (dateToMake) => {
  let myDate = new Date(dateToMake * 1000);
  return myDate.toLocaleString();
};
