const images = [corporativo1, corporativo2, corporativo3,];
{images.map((img, i) => (
<img key={i} src={img} loading="lazy" alt="Servicio de catering corporativo" />
))}
export default images