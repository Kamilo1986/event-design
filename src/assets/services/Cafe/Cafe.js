const images = [cafe1, cafe2, cafe3];
{images.map((img, i) => (
  <img key={i} src={img} loading="lazy" alt="Servicio de café" />
))}

export default images