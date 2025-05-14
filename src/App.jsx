/**
 * App.jsx - Componente principal de la aplicación de portafolio
 * 
 * Este componente controla la estructura principal del portafolio, incluyendo:
 * - Navegación
 * - Sección de héroe con información personal
 * - Sección de experiencia laboral
 * - Sección de proyectos con modalidad de diálogo para ver detalles
 * - Sección de contacto con enlaces a redes sociales
 */

import "./App.css";
import CardProject from "./components/CardProject/CardProject.jsx";
import CardExperience from "./components/CardExperience/CardExperience.jsx";
import ProyectoRepositoryMemoria from "./infrastructure/ProyectoRepositoryMemoria";
import ListarProyectos from "./application/ListarProyectos";
import React, { useState } from "react";
import ProjectInformation from "./components/ProjectInformation/ProjectInformation.jsx";

// Inicialización del repositorio y obtención de la lista de proyectos
const proyectoRepository = new ProyectoRepositoryMemoria();
const listarProyectos = new ListarProyectos(proyectoRepository);
const proyectos = listarProyectos.ejecutar();

/**
 * Componente principal App que estructura todo el portafolio
 * @returns {JSX.Element} El componente App completo
 */
function App() {
  // Estado para controlar el diálogo de detalles del proyecto
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  /**
   * Abre el diálogo con la información del proyecto seleccionado
   * @param {Object} proyecto - El proyecto seleccionado
   */
  const handleOpenDialog = (proyecto) => {
    setSelectedProject(proyecto);
    setOpenDialog(true);
  };

  /**
   * Cierra el diálogo de información del proyecto
   */
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <div className="app-root">
      {/* Cabecera con navegación */}
      <header className="app-header">
        <nav className="app-nav">
          <h1 className="app-title">My Portfolio</h1>
          <div className="nav-links">
            <a href="#experiencia" className="nav-link">
              Experiencia
            </a>
            <a href="#proyectos" className="nav-link">
              Proyectos
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </div>
        </nav>
      </header>
      <main className="app-main">
        {/* Sección de héroe con información personal */}
        <section className="hero-section">
          <div className="hero-title-container">
            <h1 className="hero-title">Vick</h1>
            <p className="hero-title-description">
              Desarrollador Full stack | Angular & TypeScript | Experto en UI/UX
            </p>
          </div>
          <div className="hero-text">
            <p>
              Desarrollador Full stack con enfoque en Frontend y más de 3 años
              de experiencia construyendo aplicaciones web y móviles.
              Especializado en Angular + Node.js (Express), con competencias en
              diseño de interfaces intuitivas (UX/UI) y manejo eficiente del
              desarrollo gracias a herramientas como Figma y Cursor IDE.
              Apasionado por la mejora continua, la experiencia del usuario y el
              aprendizaje autodidacta.
            </p>
          </div>
          <img
            src="./src/assets/background-2.jpg"
            alt="logo"
            className="hero-bg"
          />
        </section>

        {/* Sección de experiencia laboral */}
        <section className="experiencia-section" id="experiencia">
          <img
            src="./src/assets/background-3.jpg"
            alt="logo"
            className="experiencia-bg"
          />
          <h1>Experiencia</h1>
          <div className="card-experience-container">
            {proyectos.map((proyecto, idx) => (
              <CardExperience
                key={idx}
                empresa={proyecto.empresa}
                cargo={proyecto.cargo}
                fechaInicio={proyecto.fechaInicio}
                fechaFin={proyecto.fechaFin}
                lenguajes={proyecto.lenguajes}
                descripcion={proyecto.aportes}
                onClick={() => handleOpenDialog(proyecto.titulo)}
              />
            ))}
          </div>
        </section>

        {/* Sección de proyectos */}
        <section className="intro-section" id="proyectos">
          <img
            src="./src/assets/background-4.jpg"
            alt="logo"
            className="intro-bg"
          />
          <p className="intro-desc">
            Algunos de los proyectos en los que he trabajado.
          </p>
          <h3 className="proyectos-title">Proyectos</h3>
          <div className="proyectos-list">
            {proyectos.map((proyecto, idx) => (
              <div key={idx} onClick={() => handleOpenDialog(proyecto)} style={{ cursor: 'pointer' }}>
                <CardProject
                  titulo={proyecto.titulo}
                  logo={proyecto.logo}
                  descripcion={proyecto.descripcion}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="contacto-section" id="contacto">
          <h2 className="contacto-title">Contacto</h2>
          <p className="contacto-desc">
            Si tienes alguna pregunta o necesitas ayuda, no dudes en
            contactarme.
          </p>
          <div className="contacto-links">
            <a
              href="https://www.linkedin.com/in/vickfaby"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
              aria-label="LinkedIn"
            >
              <svg
                className="contacto-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
            <a
              href="mailto:tuemail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
              aria-label="Gmail"
            >
              <svg
                className="contacto-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.065l-11.985-8.065h23.97l-11.985 8.065zm11.985-9.065h-23.97c-.554 0-1.015.447-1.015 1v16c0 .553.461 1 1.015 1h23.97c.554 0 1.015-.447 1.015-1v-16c0-.553-.461-1-1.015-1zm-1.015 2.236v13.764h-21.97v-13.764l10.985 7.393 10.985-7.393z" />
              </svg>
            </a>
            <a
              href="https://github.com/vickfaby"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
              aria-label="GitHub"
            >
              <svg
                className="contacto-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.563.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </section>

      </main>
      {/* Modal de diálogo para mostrar detalles del proyecto */}
      {openDialog && selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
          onClick={handleCloseDialog}
        >
          <div style={{
            background: 'rgb(34, 34, 34)',
            borderRadius: '10px',
            padding: '12px',
            minWidth: '320px',
            maxWidth: '90vw',
            maxHeight: '70vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 32px',
            textAlign: 'center',
          }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleCloseDialog} style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: 24,
              cursor: 'pointer'
            }}>&times;</button>
            <ProjectInformation 
              titulo={selectedProject.titulo}
              logo={selectedProject.logo}
              descripcion={selectedProject.descripcion}
              imagenes={selectedProject.imagenes || []}
              link={selectedProject.link}
            />
          </div>
        </div>
      )}
      {/* Pie de página */}
      <footer className="app-footer">
        <small>
          &copy; {new Date().getFullYear()} Vick. Todos los derechos reservados.
        </small>
      </footer>
    </div>
  );
}

export default App;
