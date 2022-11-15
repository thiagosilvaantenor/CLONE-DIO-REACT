import React from 'react';
import { UserInfo } from '../../components/UserInfo';


import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import {
  Container,
  Column,
  Title,
  TitleHighlight
 } from './styles';



const Feed = () => {
  return (
  <>
      <Header autentificado={true} />
    <Container>
      <Column flex={3}>
      <Title>Feed</Title>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
        <UserInfo nome="Thiago Silva Antenor" image="https://avatars.githubusercontent.com/u/99970279?v=4" percentual={25}/>
        <UserInfo nome="Thiago Silva Antenor" image="https://avatars.githubusercontent.com/u/99970279?v=4" percentual={65}/>
        <UserInfo nome="Thiago Silva Antenor" image="https://avatars.githubusercontent.com/u/99970279?v=4" percentual={45}/>
        <UserInfo nome="Thiago Silva Antenor" image="https://avatars.githubusercontent.com/u/99970279?v=4" percentual={75}/>
      </Column>
    </Container>
      </>
  )
}

export { Feed }