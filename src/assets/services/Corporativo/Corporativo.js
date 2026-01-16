const Corporativo = Array.from({ length: 4 }, (_, i) =>
  new URL(`./corporativo${i + 1}.jpeg`, import.meta.url).href
);

export default Corporativo;
