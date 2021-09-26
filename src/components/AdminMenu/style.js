import styled from 'styled-components';

export const Menu = styled.div`
  width: 210px;
  background-color: rgb(120 137 149 / 25%);
  padding: 10px 0px;

  @media (max-width: 900px) {
    display: none;
  }

  nav {
    ul {
      padding: 0;
      list-style: none;
      margin: 0;

      li {
        a {
          font-size: 20px;
          line-height: 24px;
          color: #484848;
          font-weight: bold;
          display: flex;
          align-items: center;
          padding: 10px 20px;
          transition: all ease 0.5s;

          svg {
            margin-right: 10px;
          }

          :hover {
            background-color: #484848;
            color: #fff;
          }
        }

        > div {
          a {
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;
            padding-left: 50px;
          }
        }
      }
    }
  }
`;
