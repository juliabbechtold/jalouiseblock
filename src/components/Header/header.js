import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { Navbar } from './style';
import { BiUser, BiSupport } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { RiFileUserLine } from 'react-icons/ri';

import { useAuth } from '../../store/AuthProvider';

export default function Header() {
  const [openDrop, setOpenDrop] = useState(false);

  const { user, signOut } = useAuth();

  return (
    <Navbar openDrop={openDrop}>
      <div className="dash">
        <a href="/" className="logo">
          <img width="80px" src={require('../../assets/logo.png')} alt="Logo" />
        </a>
      </div>
      <div className="conta">
        <button type="button" onClick={() => setOpenDrop(!openDrop)}>
          <p>{!!user && user.name}</p>
          <BiUser />
          <p>Julia Bechtold</p>
          <MdArrowDropDown />
        </button>
        <nav>
          <div className="disabled" />
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
      </div>
    </Navbar>
  );
}
