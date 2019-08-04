import React from 'react'
import { MdSmartphone, MdEmail, MdMyLocation, MdPublic } from 'react-icons/md'

import {
  ListaContatos,
  Sidebar,
  ItemContact,
  Icon,
  ListaFormacao
} from './style'

export default function Contact() {
  return (
    <aside>
      <Sidebar>
        <h3>Contatos</h3>

        <ListaContatos>
          <li>
            <ItemContact>
              <h4>TELEFONE</h4>
              <p>(19) 99526-2834</p>
            </ItemContact>
            <Icon>
              <MdSmartphone />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>EMAIL</h4>
              <p>jenicarvalho@live.com</p>
            </ItemContact>
            <Icon>
              <MdEmail />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>ENDEREÇO</h4>
              <p>Vila Inema - Hortolândia - São Paulo</p>
            </ItemContact>
            <Icon>
              <MdMyLocation />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>BLOG</h4>
              <a href='http://jenicarvalho.com.br'>jenicarvalho.com.br</a>
            </ItemContact>
            <Icon>
              <MdPublic />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>GITHUB</h4>
              <a href='https://github.com/jenicarvalho'>
                github.com/jenicarvalho
              </a>
            </ItemContact>
            <Icon>
              <MdPublic />
            </Icon>
          </li>
        </ListaContatos>
      </Sidebar>

      <Sidebar>
        <h3>Educação</h3>
        <ListaFormacao>
          <li>
            <h4>Bacharel Sistemas de Informação</h4>
            <p>Metrocamp Turma 2014 - 2018</p>
          </li>
        </ListaFormacao>
      </Sidebar>
    </aside>
  )
}