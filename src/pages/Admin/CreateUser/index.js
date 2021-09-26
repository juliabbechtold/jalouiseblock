import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import { Container } from './style';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';
import Input from 'react-input-mask';
import { notification } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import history from '../../../services/history';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function CreateUser() {
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaErro, setSenhaErro] = useState(false);
  const [numCPF, setNumCPF] = useState();
  const [validoCPF, setValidoCPF] = useState();

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      cpf: '',
    },

    validationSchema: Yup.object({
      nome: Yup.string().required('*Campo nome é obrigatório'),
      email: Yup.string()
        .email('Informe um e-mail válido')
        .required('*Campo e-mail é obrigatório'),
      senha: Yup.string().required('*Campo senha é obrigatório'),
    }),

    onSubmit: async (values, { resetForm }) => {
      const body = {
        name: values.nome,
        email: values.email,
        password: values.senha,
        cpf: numCPF.replace(/\D/gim, ''),
      };

      try {
        // Sucesso ao enviar
        if (values.senha === confirmarSenha && validoCPF !== false) {
          await axios.post('http://localhost:3333/users', body);
          setSenhaErro(false);
          resetForm();
          setValidoCPF();
          setConfirmarSenha('');

          notification.success({
            message: 'Usuário cadastrado com sucesso! 🚀',
            placement: 'bottomRight',
          });

          history.push('/admin/users');
        }

        if (values.senha !== confirmarSenha) {
          setSenhaErro(true);
        }
      } catch (error) {
        // Erro ao enviar

        if (error.response.status === 500) {
          notification.error({
            message: 'CPF já cadastrado!',
            placement: 'bottomRight',
          });
        } else if (error.response.status === 400) {
          notification.error({
            message: 'Email já cadastrado',
            placement: 'bottomRight',
          });
        } else {
          notification.error({
            message: 'Não foi possivel concluir o cadastro!',
            description: 'Verfique os campos e tente novamente mais tarde...',
            placement: 'bottomRight',
          });
        }
      }
    },
  });

  function TestaCPF(valor) {
    var Soma;
    var Resto;
    Soma = 0;
    setNumCPF(valor);
    const valorCPF = valor.replace(/\D/g, '');
    if (valorCPF === '00000000000') return setValidoCPF(false);

    for (let i = 1; i <= 9; i += 1)
      Soma = Soma + parseInt(valorCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(valorCPF.substring(9, 10)))
      return setValidoCPF(false);

    Soma = 0;
    for (let i = 1; i <= 10; i += 1)
      Soma = Soma + parseInt(valorCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(valorCPF.substring(10, 11)))
      return setValidoCPF(false);
    return setValidoCPF(true);
  }

  return (
    <>
      <Helmet>
        <title>Jalouise Block</title>
      </Helmet>
      <Header />
      <Container>
        <AdminMenu />
        <div className="content">
          <h4>Adicionar novo usuário</h4>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {/* {!!avatarErro && <span id="erro">{avatarErro}</span>} */}
            <label>Nome</label>
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
                className={formik.errors.nome ? 'border' : ''}
              />
              {formik.touched.nome && formik.errors.nome ? (
                <span className="erro">{formik.errors.nome}</span>
              ) : null}
            </div>
            <label>E-mail</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Digite o e-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={formik.errors.email ? 'border' : ''}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="erro">{formik.errors.email}</span>
              ) : null}
            </div>
            <label>Senha</label>
            <div>
              <input
                type="password"
                name="senha"
                placeholder="Defina uma senha"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.senha}
                className={formik.errors.senha ? 'border' : ''}
              />
              {formik.touched.senha && formik.errors.senha ? (
                <span className="erro">{formik.errors.senha}</span>
              ) : null}
            </div>
            <label>Confirmação de senha</label>
            <div>
              <input
                type="password"
                placeholder="Repita a senha"
                onChange={(e) => {
                  setConfirmarSenha(e.target.value);
                  setSenhaErro(false);
                }}
                className={senhaErro ? 'border' : ''}
              />
              {senhaErro && (
                <span className="erro">*Senhas não são iguais</span>
              )}
            </div>
            <label>CPF</label>
            <div>
              <Input
                type="tel"
                name="cpf"
                mask="999.999.999-99"
                formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
                placeholder="Digite o cpf"
                onChange={(e) => TestaCPF(e.target.value)}
                onBlur={formik.handleBlur}
                value={numCPF}
                className={validoCPF === false ? 'border' : ''}
              />
              {validoCPF === true && (
                <span className="cpfvalido">
                  CPF válido <AiOutlineCheckCircle />
                </span>
              )}
              {validoCPF === false && (
                <span className="erro">*Informe um CPF válido</span>
              )}
            </div>
            <div className="btns">
              <div className="disabled" />
              <button type="submit">Adicionar novo usuário</button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
