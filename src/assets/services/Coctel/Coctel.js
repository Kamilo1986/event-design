const images = [coctel1, coctel2, coctel3,];
{images.map((img, i) => (
  <img key={i} src={img} loading="lazy" alt="Servicio de coctelería" />
))}

export default images