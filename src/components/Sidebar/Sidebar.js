import React from "react";
import { MdSmartphone, MdEmail, MdMyLocation, MdPublic } from "react-icons/md";

import {
  ListaContatos,
  Sidebar,
  ItemContact,
  Icon,
  ListaFormacao
} from "./style";

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
              <p>jenicarvalho(at)live.com</p>
            </ItemContact>
            <Icon>
              <MdEmail />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>ENDEREÇO</h4>
              <p>Hortolândia - São Paulo</p>
            </ItemContact>
            <Icon>
              <MdMyLocation />
            </Icon>
          </li>
          <li>
            <ItemContact>
              <h4>GITHUB</h4>
              <a
                href="https://github.com/jenicarvalho"
                rel="noopener noreferrer"
                target="_blank"
              >
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
            <h4>Pós Graduação em Arquitetura de Software</h4>
            <p>PUC Turma 2021 - 2022</p>
          </li>
          <li>
            <h4>Bacharel Sistemas de Informação</h4>
            <p>Metrocamp Turma 2014 - 2018</p>
          </li>
          <li>
            <h4>Técnico em Informática para Internet</h4>
            <p>ETEC Hortolândia 2012 - 2013</p>
          </li>
        </ListaFormacao>
      </Sidebar>
    </aside>
  );
}
