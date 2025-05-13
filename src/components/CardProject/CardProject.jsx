import "./CardProject.css";

function CardProject({ titulo, logo, descripcion }) {
  return (
    <div className="card-project">
      <div className="card-project-content">
        {/* <h4 className="card-project-title">{titulo}</h4> */}
        <img src={logo} alt={`Project Logo ${titulo}`} className="card-project-logo" />
        <p className="card-project-description">{descripcion}</p>
      </div>
      <div className="card-project-link-container">
      </div>
    </div>
  );
}

export default CardProject;
