class Proyecto {
  constructor({ titulo, empresa, cargo, fechaInicio, fechaFin, logo, lenguajes, descripcion, aportes, imagenes, link }) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.cargo = cargo;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.logo = logo;
    this.lenguajes = lenguajes;
    this.descripcion = descripcion;
    this.aportes = aportes;
    this.imagenes = imagenes;
    this.link = link;
  }
}

export default Proyecto; 