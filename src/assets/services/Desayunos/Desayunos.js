const Desayunos = Array.from({ length: 4 }, (_, i) =>
  new URL(`./desayunos${i + 1}.jpeg`, import.meta.url).href
);

export default Desayunos;
