import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { Container } from './style';
import api from '../../services/api';
import Input from 'react-input-mask';
import { IoMdCamera, IoMdCloseCircle } from 'react-icons/io';
import { useFormik } from 'formik';
import { notification } from 'antd';

export default function Perfil() {
  const [user, setUser] = useState();
  const [avatar, setAvatar] = useState();

  // useEffect(() => {
  //   api.get('/users/me').then((response) => {
  //     setUser(response.data);
  //   });
  // }, []);

  function onChange(e) {
    if (e.target.files && e.target.files[0]) {
      var file = new FileReader();
      file.onload = function (e) {
        document.getElementById('preview').src = e.target.result;
      };
      file.readAsDataURL(e.target.files[0]);
      setAvatar(e.target.files[0]);
    }
  }

  console.log(avatar);

  const formik = useFormik({
    onSubmit: async (values, { resetForm }) => {
      const form = new FormData();

      form.append('avatar', avatar);

      try {
        // Sucesso ao enviar
        await api.post('/users/avatar', form);

        notification.success({
          message: 'Foto cadastrada com sucesso! 🚀',
          placement: 'bottomRight',
        });
      } catch (error) {
        // Erro ao enviar
        notification.error({
          message: 'Não foi possivel concluir o cadastro da foto! 😔',
          description: 'Verfique os campos e tente novamente mais tarde...',
          placement: 'bottomRight',
        });
      }
    },
  });

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <h4 className="nome">{!!user && user.name}</h4>
          <div>
            <div>
              <label>E-mail</label>
              <p>{!!user && user.email}</p>
              <label>CPF</label>
              <Input
                label="tel"
                type="tel"
                name="telefone"
                mask="999.999.999-99"
                formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
                maskChar={null}
                value={!!user && user.cpf}
                disabled
              />

              <p className="alterar">
                *Para alterar os seus dados, entre em contato com o seu
                supervisor
              </p>
              {avatar && <button type="submit">Salvar</button>}
            </div>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}
