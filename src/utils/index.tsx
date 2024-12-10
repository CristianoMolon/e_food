export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (itens: Cardapio[]) => {
  return itens.reduce((precoTotal, precoAtual) => {
    return (precoTotal += precoAtual.preco!)
  }, 0)
}
