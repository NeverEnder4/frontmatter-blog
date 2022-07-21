import formatDate from "date-fns/format";

export function formatPostDate(date: string, format: string = "LLLL d',' y") {
  const dateObject = new Date(date);
  return formatDate(dateObject, format);
};