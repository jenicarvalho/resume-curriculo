import styled from 'styled-components'

export const ListaFormacao = styled.div``

export const Sidebar = styled.div`
  text-align: right;
  background-color: #2b2b30;
  padding: 40px;
  color: #fff;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  p,
  a {
    font-size: 14px;
    color: #fff;
    display: inline-block;
  }
  }
`

export const ListaContatos = styled.ul`
  list-style: none;
  line-height: 30px;
`
export const ItemContact = styled.div`
  padding-right: 15px;

  h4 {
    height: 20px;
    font-size: 14px;
  }
`

export const Icon = styled.span`
  border: 1px solid;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-block;
  text-align: center;

  svg {
    position: relative;
    top: 3px;
  }
`
