const Gastro = Array.from({ length: 4 }, (_, i) =>
  new URL(`./gastro${i + 1}.jpeg`, import.meta.url).href
);

export default Gastro;
