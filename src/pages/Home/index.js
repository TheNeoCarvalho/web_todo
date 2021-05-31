import React from 'react'
import Header from '../../components/Header'
import { Plus, Circle, CheckCircle, Trash } from 'react-feather';
import api from './../../service/api'

import { Container, ButtonAdd, Card, CardText, CardOptions, CardOption } from './styles';

function Home() {

  return (
    <>
      <Header />
      <Container>
        {/* <h2>
          Parabéns!! 
          Você conclui todas as terefas. ;)
        </h2> */}

        <Card>
          <CardText>
            <span>Comprar pão</span>
          </CardText>
          <CardOptions>
            <CardOption>
              <Circle color="#000" size={16}/>
            </CardOption>
            <CardOption>
              <Trash color="#000" size={16}/>
            </CardOption>
          </CardOptions>
        </Card>

 <Card>
          <CardText>
            <span>Comprar pão</span>
          </CardText>
          <CardOptions>
            <CardOption>
              <Circle color="#000" size={16}/>
            </CardOption>
            <CardOption>
              <Trash color="#000" size={16}/>
            </CardOption>
          </CardOptions>
        </Card>

 <Card>
          <CardText>
            <span>Comprar pão</span>
          </CardText>
          <CardOptions>
            <CardOption>
              <Circle color="#000" size={16}/>
            </CardOption>
            <CardOption>
              <Trash color="#000" size={16}/>
            </CardOption>
          </CardOptions>
        </Card>

 <Card>
          <CardText>
            <span>Comprar pão</span>
          </CardText>
          <CardOptions>
            <CardOption>
              <Circle color="#000" size={16}/>
            </CardOption>
            <CardOption>
              <Trash color="#000" size={16}/>
            </CardOption>
          </CardOptions>
        </Card>

        </Container>
      <ButtonAdd><Plus color="#fff" size={34} /></ButtonAdd>
    </>
  )}

export default Home;