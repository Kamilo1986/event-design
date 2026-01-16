const heroImages = Array.from({ length: 18 }, (_, i) =>
  new URL(`./hero${i + 1}.jpeg`, import.meta.url).href
);

export default heroImages;
