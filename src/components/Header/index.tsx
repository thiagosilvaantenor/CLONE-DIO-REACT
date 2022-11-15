import React from "react";
import logo from '../../assets/logo.png'

import {Button} from '../Button';
import {
  BuscarInputContainer,
  Input,
  Menu,
  Container,
  MenuRight,
  Row,
  Wrapper,
  UserPicture
} from './styles'
import { IHeader } from "./types";

const Header= ({autentificado}: IHeader) =>{
  return(
    <Wrapper>
      <Container>
      <Row>
          <img src={logo} alt="Logo da Dio" />
          {autentificado ? (
            <>
                  <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
              </>
          ) : null}
         
        </Row>
        <Row>
          {autentificado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/99970279?v=4" />
            ) : (
            <>
            <MenuRight href="/">Home</MenuRight>
            <Button title='Entrar'/>
            <Button title='Cadastrar'/>
            </>
          )}
          
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header};