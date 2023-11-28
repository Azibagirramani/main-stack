const formatDate = (inputDate: string) => {
  const options: Intl.DateTimeFormatOptions | undefined = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return new Date(inputDate).toLocaleDateString("en-US", options);
};

export default formatDate;
