import React from 'react';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';
// import { MdDashboard } from 'react-icons/md';
import { Menu } from './style';

export default function AdminMenu() {
  return (
    <Menu>
      <nav>
        <ul>
          {/* <li>
            <a href="/admin/dashboard">
              <MdDashboard />
              Dashboard
            </a>
          </li> */}
          <li>
            <a>
              <FaUserCircle />
              Usuários
            </a>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="/admin/createuser">
                      <FaUserPlus />
                      Adicionar novo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>
      </nav>
    </Menu>
  );
}
