import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import toast, {Toaster} from "react-hot-toast";

import { Row, Col} from './Grid';
import api from "../services/api.service";

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
  border: ${props => props.inputBorder || "1px solid #989FDB"};
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

const PAlert = styled.p`
  font-weight: normal;
  font-size: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  color: #FF377F;
`

export function Login(){
    const { register, handleSubmit, errors } = useForm();
    let [loading, setLoading] = useState(false);
    let [disable, setDisable] = useState(false);
    let [btnText, setText] = useState('ENTRAR');

    function onSubmit(data) {
        setLoading(!loading)
        setDisable(!disable)
        setText('VERIFICANDO...')
        api.post("auth", data).then((response) => {
            if (response.data.email == data.email && response.data.password == data.password) {
                localStorage.setItem("user", JSON.stringify(response.data));
                toast.success('Logado com sucesso!');
                setText('Logado')
                setLoading(false)
            }

            return response.data;
        });

    }

    return (
        <Row>
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)}>
                <ColForm descktop='12'>
                    <Label htmlFor='email'>E-MAIL</Label>
                    <Input id='email' placeholder='user.name@mail.com' name='email'
                           inputBorder={errors.email && '1px solid #FF377F'}
                           ref={register({
                               required: 'Digite um e-mail',
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                   message: 'Digite um e-mail válido;',
                               },
                           })} />
                    {
                        errors.email && <PAlert >{errors.email.message}</PAlert>
                    }
                </ColForm>

                <ColForm descktop='12'>
                    <Label htmlFor='pass'>SENHA</Label>
                    <Input id='pass' name='password' placeholder='*******' type='password'
                           inputBorder={errors.password && '1px solid #FF377F'}
                           ref={register({
                               required: 'Digite uma senha',
                               pattern: {
                                   value: /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/,
                                   message: 'A senha fora do padrão!',
                               },
                           })} />
                    {
                        errors.password && <PAlert >{errors.password.message}</PAlert>
                    }
                </ColForm>

                <ColForm descktop='12'>
                    <Btn disabled={disable}>{btnText} <RingLoader color="#ffffff" css="margin-left: 6px" loading={loading} size={15} /></Btn>

                </ColForm>
                <ColForm descktop='12'>
                    <P >
                        Esqueceu seu login ou senha?<br/>
                        Clique <a href=''>aqui</a>
                    </P>
                </ColForm>
            </form>
        </Row>
    );
}
