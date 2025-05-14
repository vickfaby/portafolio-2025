import Proyecto from "../domain/Proyecto";
import ProyectoRepository from "../domain/ProyectoRepository";

class ProyectoRepositoryMemoria extends ProyectoRepository {
  listarProyectos() {
    return [
      // new Proyecto({
      //   titulo: "Taskfeeder",
      //   logo: "./src/assets/projects-images/taskfeeder/logo.png",
      //   descripcion:
      //     "¡La interfaz de Task Feeder!, una App que permite la alimentación de procesos de cualquier empresa, programada en Kotlin para Global Primex Tecnología.",
      //   imagenes: [
      //     "./src/assets/projects-images/taskfeeder/taskfeeder1.jpg",
      //     "./src/assets/projects-images/taskfeeder/taskfeeder2.jpg",
      //   ],
      //   link: "#",
      // }),
      new Proyecto({
        titulo: "Unify",
        empresa: "Prizmo",
        cargo: "Desarrollador Full stack / UX-UI Designer",
        fechaInicio: "Octubre 2024",
        fechaFin: "Diciembre 2024",
        logo: "./src/assets/projects-images/unify/logo.png",
        lenguajes: "Angular, Node.js, Express, GraphQL, SQL, SCSS",
        descripcion:
          "Unify es una plataforma de gestión de procesos, consta de aplicacion web y movil, construida con angular tanto para web como para la app móvil en modo PWA, para Prizmo.",
          aportes:[" Migración de arquitectura a hexagonal.",
            " Propuesta e implementación de nueva UI/UX para plataforma web, resultó en el entendimiento de un 80% del core de la plataforma a comparación del 20% de entendimiento con la UI anterior",
            " Propuesta de cambios en UI móvil, acelerando el entendimiento del flujo de información para el usuario en un 40%.",
            " Uso de Cursor IDE para acelerar el desarrollo.",
          ],
        imagenes: [
          "./src/assets/projects-images/unify/unify-0.png",
          "./src/assets/projects-images/unify/unify-1.png",
          "./src/assets/projects-images/unify/unify-2.png",
          "./src/assets/projects-images/unify/unify-3.png",
          "./src/assets/projects-images/unify/unify-4.png",
        ],
        link: "https://unify.prizmo.mx/",
      }),
      new Proyecto({
        titulo: "C2G",
        empresa: "Global Primex Tecnología",
        cargo: "Desarrollador Full stack",
        fechaInicio: "Octubre 2023",
        fechaFin: "Octubre 2024",
        logo: "./src/assets/projects-images/c2g/logo.png",
        lenguajes: "Angular, Node.js, GraphQL, SCSS",
        descripcion:
          "C2G es una plataforma de gestión de procesos, consta de aplicacion web y movil, construida con angular para web y flutter para la app móvil, para Global Primex Tecnología.",
          aportes:["Desarrollo de funcionalidades a la medida solicitadas por el cliente..",
            "Mejora en el método de generación de reportes, haciendo un 90% más fácil su mantenimiento y un 60% más rápido la creación de nuevos formatos..",
            "Optimización de petición principal de la plataforma web, mejorando un 20% su velocidad de respuesta.",
            "Propuestas de mejora de UI para optimizar el análisis de la información en pantalla.",
            "Aporte voluntario de mapa de flujo de información del manejo de estados(NgRx) para futuros nuevos integrantes del equipo.",
          ],
        imagenes: [
          "./src/assets/projects-images/c2g/c2g-1.png",
          "./src/assets/projects-images/c2g/c2g-2.png",
          "./src/assets/projects-images/c2g/c2g-3.png",
          "./src/assets/projects-images/c2g/c2g-4.png",
        ],
        link: "https://c2gup.com/",
      }),
      new Proyecto({
        titulo: "Jobty",
        empresa: "Colosso Software",
        cargo: "Desarrollador Full stack / UX-UI Designer",
        fechaInicio: "Diciembre 2024",
        fechaFin: "Actualidad",
        logo: "./src/assets/projects-images/jobty/logo.png",
        lenguajes: "Angular, Kotlin, Flutter",
        descripcion:
          "Jobty es una plataforma enfocada en la gestión operativa de la empresa, consta de aplicacion web y movil, construida con angular para web y flutter para la app móvil",
          aportes:["Diseño de UI y desarrollo frontend para app de gestión de procesos.",
            "Implementación de vistas con Kotlin y Angular.",
          ],
        imagenes: [
          "./src/assets/projects-images/jobty/jobty-1.png",
          "./src/assets/projects-images/jobty/jobty-2.png",
          "./src/assets/projects-images/jobty/jobty-3.png",
          "./src/assets/projects-images/jobty/jobty-4.png",
        ],
        link: "https://www.jobty.app/",
      }),
    ];
  }
}

export default ProyectoRepositoryMemoria;
