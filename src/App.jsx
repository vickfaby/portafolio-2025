import "./App.css";

const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion:
      "Descripción breve del proyecto 1. Tecnologías usadas: React, Node.js.",
    link: "#",
  },
  {
    titulo: "Proyecto 2",
    descripcion:
      "Descripción breve del proyecto 2. Tecnologías usadas: Vue, Firebase.",
    link: "#",
  },
  {
    titulo: "Proyecto 3",
    descripcion:
      "Descripción breve del proyecto 3. Tecnologías usadas: Angular, Express.",
    link: "#",
  },
];

function App() {
  return (
    <div className="app-root" style={{ minHeight: "100vh", background: "#121212", color: "#fff" }}>
      <header style={{ background: "#90caf9", padding: "16px 0" }}>
        <nav style={{ display: "flex", alignItems: "center", maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1e1e1e", color: "#90caf9", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, fontWeight: "bold", fontSize: 20 }}>
            P
          </div>
          <h1 style={{ flexGrow: 1, fontSize: 24, margin: 0 }}>Mi Portafolio</h1>
          <a href="#contacto" style={{ color: "#fff", textDecoration: "none", background: "#1e1e1e", padding: "8px 16px", borderRadius: 4 }}>Contacto</a>
        </nav>
      </header>
      <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
        <section style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, margin: 0 }}>Hola, soy Vick</h2>
          <p style={{ fontSize: 20, color: "#b0b0b0", marginTop: 16 }}>
            Desarrollador web apasionado por crear soluciones modernas y eficientes.
          </p>
        </section>
        <h3 style={{ fontSize: 28, marginBottom: 24 }}>Proyectos</h3>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {proyectos.map((proyecto, idx) => (
            <div key={idx} style={{ background: "#1e1e1e", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.2)", width: 280, display: "flex", flexDirection: "column", minHeight: 200 }}>
              <div style={{ padding: 20, flexGrow: 1 }}>
                <h4 style={{ margin: "0 0 12px 0", fontSize: 20 }}>{proyecto.titulo}</h4>
                <p style={{ color: "#b0b0b0", fontSize: 15 }}>{proyecto.descripcion}</p>
              </div>
              <div style={{ padding: "0 20px 20px 20px", marginTop: "auto" }}>
                <a href={proyecto.link} target="_blank" rel="noopener noreferrer" style={{ color: "#90caf9", textDecoration: "none", fontWeight: "bold" }}>
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer style={{ background: "#90caf9", color: "#1e1e1e", textAlign: "center", padding: "24px 0", marginTop: 40 }}>
        <small>&copy; {new Date().getFullYear()} Vick. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
}

export default App;
