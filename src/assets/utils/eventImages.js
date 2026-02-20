const eventImages = Array.from({ length: 6 }, (_, i) =>
  new URL(`./eventImages${i + 1}.webp`, import.meta.url).href
);

export default eventImages;
