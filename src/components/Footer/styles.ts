import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${Cores.bege};
  padding: 40px 0;
  text-align: center;
  font-size: 10px;
  color: ${Cores.vermelho};
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;

  a {
    padding: 0 8px;
  }
`
