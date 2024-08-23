class Pratos {
  descricao: string
  titulo: string
  imagem: string
  id: number

  constructor(id: number, descricao: string, titulo: string, imagem: string) {
    this.id = id
    this.descricao = descricao
    this.titulo = titulo
    this.imagem = imagem
  }
}

export default Pratos
