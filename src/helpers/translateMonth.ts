export function translateMonthToUzbek(month) {
  const months = {
    JANUARY: "YANVAR",
    FEBRUARY: "FEVRAL",
    MARCH: "MART",
    APRIL: "APREL",
    MAY: "MAY",
    JUNE: "IYUN",
    JULY: "IYUL",
    AUGUST: "AVGUST",
    SEPTEMBER: "SENTABR",
    OCTOBER: "OKTABR",
    NOVEMBER: "NOYABR",
    DECEMBER: "DEKABR",
  };

  return months[month.toUpperCase()] || month;
}

export const monthsArr = [
  "YANVAR",
  "FEVRAL",
  "MART",
  "APREL",
  "MAY",
  "IYUN",
  "IYUL",
  "AVGUST",
  "SENTABR",
  "OKTABR",
  "NOYABR",
  "DEKABR",
];
