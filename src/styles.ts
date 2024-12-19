import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  vermelho: '#E66767',
  creme: '#FFF8F2',
  bege: '#FFEBD9',
  branco: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
    list-style: none;
    text-decoration: none;

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
    }
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.vermelho};
  line-height: 21px;
  margin: 8px 7px;
`
