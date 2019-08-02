import styled from 'styled-components'

export const SidebarContatos = styled.aside`
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

  h3 {
    position: relative;
    color: #d7b22a;
    text-transform: uppercase;
    border-bottom: 2px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;

    &::after {
      position: absolute;
      content: '';
      padding: 3px 16px;
      background: #d7b22a;
      bottom: -4px;
      right: 0px;
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
