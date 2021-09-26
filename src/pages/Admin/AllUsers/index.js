import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Table, Modal, notification } from 'antd';
import Input from 'react-input-mask';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import { Container } from './style';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';
import api from '../../../services/api';
import history from '../../../services/history';
import { useAuth } from '../../../store/AuthProvider';

export default function AllUsers() {
  const [users, setUsers] = useState();
  const [userLogged, setUserLogged] = useState();
  const [deletedUsers, setDeletedUsers] = useState();
  const [selectedModal, setSelectedModal] = useState({
    modalisopen: false,
    selectmodal: '',
  });

  const { user } = useAuth();

  useEffect(() => {
    const { id } = user;

    api.get('/users').then((response) => {
      const users = response.data.filter((user) => user.id !== id);

      const usersLogged = response.data.filter((user) => user.id === id);
      setUsers(users);
      setUserLogged(usersLogged);
    });
  }, []);

  const dataSource =
    !!users &&
    users.map((user, index) => ({
      key: user.id,
      nome: user.name,
      email: user.email,
      cpf: user.cpf,
    }));

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      render: (text) => (
        <Input
          type="tel"
          name="cpf"
          mask="999.999.999-99"
          formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
          maskChar={null}
          value={text}
          disabled
        />
      ),
    },
    {
      title: 'Editar',
      dataIndex: 'editar',
      key: 'editar',
      render: (text, record) => (
        <button
          type="button"
          onClick={() =>
            history.push({
              pathname: '/admin/updateuser',
              state: {
                user_id: record.key,
              },
            })
          }
        >
          <AiFillEdit />
        </button>
      ),
    },
    // {
    //   title: 'Excluir',
    //   dataIndex: 'excluir',
    //   key: 'excluir',
    //   render: (text, record) => (
    //     <button
    //       type="button"
    //       className="delete"
    //       onClick={() =>
    //         setSelectedModal({
    //           modalisopen: true,
    //           selectmodal: record.key,
    //         })
    //       }
    //     >
    //       <AiFillDelete />
    //     </button>
    //   ),
    // },
  ];

  function handleDelete() {
    try {
      setTimeout(() => {
        window.location.reload();
      }, 1500);

      const userIndex = users.findIndex(
        (user) => user.id === selectedModal.selectmodal
      );

      deletedUsers.push(
        Object.assign(...users[userIndex], {
          deleted_at: new Date(),
        })
      );

      users.splice(userIndex, 1);
      notification.success({
        message: 'Usuário excluído com sucesso!',
        placement: 'bottomRight',
      });
    } catch (error) {
      // Erro ao enviar
      notification.error({
        message: 'Não foi possivel excluir o usuário! 😔',
        description: 'Verfique os campos e tente novamente mais tarde...',
        placement: 'bottomRight',
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Jalouise Bloquer</title>
      </Helmet>
      <Header />
      <Container>
        <AdminMenu />
        <div className="content">
          <div className="title">
            <h4>Usuários</h4>
            <a href="/admin/createuser">Adicionar novo</a>
          </div>
          <p>Todos ({!!users && users.length})</p>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: '560px' }}
          />
          {/* <table>
            <tbody>
              <tr>
                <td>{!!userLogged && userLogged[0].name}</td>
                <td>{!!userLogged && userLogged[0].email}</td>
                <td>
                  <Input
                    type="tel"
                    name="cpf"
                    mask="999.999.999-99"
                    formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
                    maskChar={null}
                    value={!!userLogged && userLogged[0].cpf}
                    disabled
                  />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      history.push({
                        pathname: '/admin/updateuser',
                        state: {
                          user_id: !!userLogged && userLogged[0].id,
                        },
                      })
                    }
                  >
                    <AiFillEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <Modal
          closable={false}
          visible={selectedModal.modalisopen}
          footer={null}
          id="modal"
          width="300px"
        >
          <h4>Excluir esse usuário?</h4>
          <div>
            <button
              className="excluir"
              type="button"
              onClick={() => {
                handleDelete();
                setSelectedModal({
                  modalisopen: false,
                });
              }}
            >
              Excluir <MdDelete />
            </button>
            <button
              className="cancelar"
              type="button"
              onClick={() =>
                setSelectedModal({
                  modalisopen: false,
                })
              }
            >
              Cancelar
            </button>
          </div>
        </Modal>
      </Container>
      <Footer />
    </>
  );
}
