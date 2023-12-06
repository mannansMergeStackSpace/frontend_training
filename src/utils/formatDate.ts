const formatDate = (options: Intl.DateTimeFormatOptions, date: Date) => {
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};
export default formatDate;
