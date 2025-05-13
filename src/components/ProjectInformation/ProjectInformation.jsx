import "./ProjectInformation.css";

function ProjectInformation({ titulo, logo, descripcion, imagenes, link }) {
  return (
    <div>
      {/* <h1 className="project-title">{titulo}</h1> */}
      <img src={logo} alt={`Project Logo ${titulo}`} className="project-logo" />
      <p className="project-description">{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="project-button">Ir a la web</button>
      </a>
      <div className="images-container">
        {imagenes.map((imagen, index) => (
          <div className="image-container" key={index}>
            <img src={imagen} alt={`Project Image ${index + 1}`} className="image-project" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectInformation;
