import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { Container } from './style';
import { Switch } from 'antd';
import { FiLogOut } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { RiFileUserLine } from 'react-icons/ri';
import { useAuth } from '../../store/AuthProvider';
import { TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti';
import { Table } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function Home() {
  const [status, setStatus] = useState('Aberta');
  const [tempo, setTempo] = useState();

  useEffect(() => {
    getUserPosition();
  }, []);

  function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span.temp');
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
        city.innerText = `Temperatura atual em ${data.name}:`;
        temp.innerText = tempInCelsius;
        setTempo(data);
      })
      .catch((err) => {
        city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
        temp.innerText = `-`;
      });
  }

  function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
      fetchApi(url);
    });
  }

  function onChange(checked) {
    if (checked === true) {
      setStatus('Aberta');
    } else setStatus('Fechada');
  }

  const { user, signOut } = useAuth();

  const dataSource = [
    {
      key: 1,
      data: '26/09/2021',
      horario: '15:24',
      descricao: 'A persinana foi fechada',
    },
    {
      key: 2,
      data: '25/09/2021',
      horario: '20:43',
      descricao: 'A persinana foi aberta',
    },
  ];

  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Horário',
      dataIndex: 'horario',
      key: 'horario',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'descricao',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Jalouise Bloquer</title>
      </Helmet>
      <Header />
      <Container>
        <nav>
          <ul>
            <li>
              <a href="/minha-conta">
                <RiFileUserLine /> Minha conta
              </a>
            </li>
            <li>
              <a href="/suporte">
                <BiSupport /> Suporte
              </a>
            </li>
            {/* Se o usuario estiver logado */}
            <li>
              <a href="/admin/dashboard">
                <MdDashboard /> Dashboard
              </a>
            </li>

            <li>
              <a href="/login" onClick={() => signOut()}>
                <FiLogOut /> Sair
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="infos">
            <div className="status-da-persiana">
              <p className="title">A persiana está</p>
              <div>
                <Switch
                  defaultChecked
                  onChange={onChange}
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                />
                <p>{status}</p>{' '}
              </div>
            </div>
            <div id="wrapper">
              <h1 class="city"></h1>
              <div>
                {!!tempo && tempo.weather[0].main === 'Clouds' && (
                  <TiWeatherCloudy />
                )}
                {!!tempo && tempo.weather[0].main === 'Clear' && (
                  <TiWeatherPartlySunny />
                )}
                <h2>
                  <span className="temp">0</span>ºC
                </h2>
              </div>
            </div>
          </div>
          <div className="atividades-recentes">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ x: '440px' }}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
