const images = [gastro1, gastro2, gastro3,];
{images.map((img, i) => (
    <img key={i} src={img} loading="lazy" alt="Servicio de catering gastronomico" />
))}
export default images