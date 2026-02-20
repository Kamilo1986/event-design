const images = [des1, des2, des3,];
{images.map((img, i) => (
    <img key={i} src={img} loading="lazy" alt="Servicio de desayunos" />
))}

export default images