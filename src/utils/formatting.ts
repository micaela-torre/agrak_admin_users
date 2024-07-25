export const formatKey = (key: string): string => {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const truncate = (text: string, maxLength: number): string => {
  if (typeof text !== "string") return text;
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};
