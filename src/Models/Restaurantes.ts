class Restaurante {
  nota: string
  infos: string[]
  descricao: string
  titulo: string
  imagem: string
  id: number

  constructor(
    id: number,
    nota: string,
    infos: string[],
    descricao: string,
    titulo: string,
    imagem: string
  ) {
    this.id = id
    this.nota = nota
    this.infos = infos
    this.descricao = descricao
    this.titulo = titulo
    this.imagem = imagem
  }
}

export default Restaurante
