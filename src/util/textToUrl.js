export default function textToUrl(text = "") {
  let url = "";

  url = text
    .replace(/ /g, "-")
    .replace(/ & /g, "-n-")
    .replace(/&/g, "n")
    .toLowerCase()
    .replace(/,/g, "~");

  return url;
}
