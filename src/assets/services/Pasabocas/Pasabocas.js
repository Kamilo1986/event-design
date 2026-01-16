const Pasabocas = Array.from({ length: 4 }, (_, i) =>
  new URL(`./pasabocas${i + 1}.jpeg`, import.meta.url).href
);

export default Pasabocas;
