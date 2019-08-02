import styled from 'styled-components'

export const HeaderContainer = styled.header``

export const ProfileImage = styled.div`
  grid-area: sidebar;

  img {
    max-width: 100%;
  }
`

export const Biography = styled.div`
  grid-area: content;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 60px;
    color: #535458;
    font-family: 'Tinos', serif;
    text-transform: uppercase;
  }

  p {
    font-style: italic;
    margin-top: 10px;
  }
`

export const Occupation = styled.h2`
  color: #d7b22a;
  background-color: #2b2b30;
  font-size: 21px;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
  padding: 10px 0 10px 15px;
`

export const Title = styled.h2`
  grid-area: perfil-sidebar;
  color: #fff;
  text-align: right;
  background-color: rgba(153, 123, 11, 0.36);
  padding: 20px;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    padding: 8px 20px;
    position: absolute;
    background: #fff;
    bottom: 53.5%;
    left: 35%;
  }
`

export const ProfessionalProfile = styled.div`
  grid-area: perfil;
  background-color: #d7b22a;
  padding: 20px 50px;
  display: flex;
  align-items: center;

  p {
    color: #fff;
    line-height: 25px;
  }
`
