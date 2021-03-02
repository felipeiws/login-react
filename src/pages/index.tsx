import styled from "styled-components";

import { Container, Row, Col } from '../components/Grid'
import { Login } from '../components/login'

const ColImg = styled(Col)`
  background-image: url('img/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const DivImg = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  min-height: 100vh;
`

const Title = styled.h1`
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #383E71;
`
const P = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989FDB;
`

const ColForm = styled(Col)`
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
`

export default function Home() {
  return (
      <Container>
          <Row>
              <ColImg tablet='5' desktop='7' >
                  <DivImg />
              </ColImg>
              <ColForm tablet='7' desktop='5'>
                  <Title>Olá, seja<br /> bem-vindo!</Title>
                  <P>Para acessar a plataforma, faça seu login.</P>
                  <Login />
              </ColForm>
          </Row>
      </Container>
  )
}
