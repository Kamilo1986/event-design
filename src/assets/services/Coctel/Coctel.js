const Coctel = Array.from({ length: 4 }, (_, i) =>
  new URL(`./coctel${i + 1}.jpeg`, import.meta.url).href
);

export default Coctel;
