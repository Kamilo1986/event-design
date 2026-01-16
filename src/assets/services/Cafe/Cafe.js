const Cafe = Array.from({ length: 4 }, (_, i) =>
  new URL(`./cafe${i + 1}.jpeg`, import.meta.url).href
);

export default Cafe;
