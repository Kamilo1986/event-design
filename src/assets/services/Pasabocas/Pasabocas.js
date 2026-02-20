const images = [pasa1, pasa2, pasa3,];
{images.map((img, i) => (
    <img key={i} src={img} loading="lazy" alt="Servicio de pasabocas" />
))}
export default images