export function convertDateToMonthYear(dateStr) {
  // Create a Date object from the input string
  const date = new Date(dateStr);

  // Extract the month name (abbreviated) and year using toLocaleString()
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}
