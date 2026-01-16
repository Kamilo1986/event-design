const eventImages = Array.from({ length: 18 }, (_, i) =>
  new URL(`./eventImages${i + 1}.jpeg`, import.meta.url).href
);

export default eventImages;
