class ListarProyectos {
  constructor(proyectoRepository) {
    this.proyectoRepository = proyectoRepository;
  }

  ejecutar() {
    return this.proyectoRepository.listarProyectos();
  }
}

export default ListarProyectos; 