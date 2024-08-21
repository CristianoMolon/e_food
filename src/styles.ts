import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  vermelho: '#E66767',
  creme: '#FFF8F2',
  bege: '#FFEBD9',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
    list-style: none;

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  }
`

export const Botao = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  border: none;
  margin: 8px;
`
