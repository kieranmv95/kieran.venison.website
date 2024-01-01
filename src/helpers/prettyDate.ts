export const prettyDate = (date: Date): string =>
  date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .replaceAll("/", "-");
