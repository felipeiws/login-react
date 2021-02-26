import { Row, Col} from '../components/Grid'
import styled from "styled-components";

const Label = styled.label`
  font-weight: normal;
  font-size: 10px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #383E71;
  padding-left: 10px;
`

const Input = styled.input`
  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 12px;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  align-items: center;

  color: #989FDB;
`

const ColForm = styled(Col)`
  width: 100%;
  margin-bottom: 10px;
`

const Btn = styled.button`
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  border: 0px;
  width: 100%;
  padding: 14px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin-top: 14px;
`

const P = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;
  margin-top: 20px;
`

export function Login(){
    return (
        <Row>
            <ColForm descktop='12'>
                <Label htmlFor='email'>E-MAIL</Label>
                <Input id='email' placeholder='user.name@mail.com' type='email' />
            </ColForm>

            <ColForm descktop='12'>
                <Label htmlFor='pass'>SENHA</Label>
                <Input id='pass' placeholder='*******' type='password'  />
            </ColForm>

            <ColForm descktop='12'>
                <Btn>ENTRAR</Btn>
            </ColForm>
            <ColForm descktop='12'>
                <P >
                    Esqueceu seu login ou senha?<br/>
                    Clique <a href=''>aqui</a>
                </P>
            </ColForm>
        </Row>
    );
}
