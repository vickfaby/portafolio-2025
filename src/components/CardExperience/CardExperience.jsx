import "./CardExperience.css";

function CardExperience({
  empresa,
  cargo,
  fechaInicio,
  fechaFin,
  lenguajes,
  descripcion
}) {
  return (
    <div className="card-experience">
      <h3 className="card-experience-title">{empresa}</h3>
      <h4 className="card-experience-cargo">{cargo}</h4>
      <p className="card-experience-date">{fechaInicio} - {fechaFin}</p>
      <p className="card-experience-languages">{lenguajes}</p>
      {descripcion.map((item, index) => (
        <p key={index} className="card-experience-description">{item}</p>
      ))}
    </div>
  );
}

export default CardExperience;
