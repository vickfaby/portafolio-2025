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
        logo: "./src/assets/projects-images/unify/logo.png",
        descripcion:
          "Unify es una plataforma de gestión de procesos, consta de aplicacion web y movil, construida con angular tanto para web como para la app móvil en modo PWA, para Prizmo.",
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
        logo: "./src/assets/projects-images/c2g/logo.png",
        descripcion:
          "C2G es una plataforma de gestión de procesos, consta de aplicacion web y movil, construida con angular para web y flutter para la app móvil, para Global Primex Tecnología.",
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
        logo: "./src/assets/projects-images/jobty/logo.png",
        descripcion:
          "Jobty es una plataforma enfocada en la gestión operativa de la empresa, consta de aplicacion web y movil, construida con angular para web y flutter para la app móvil",
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
