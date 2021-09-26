import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  padding: 10px 40px;
  position: fixed;
  background-color: #fff;
  z-index: 9;
  box-shadow: 0 2px 7px rgba(120, 137, 149, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    padding: 10px 20px;
  }

  .dash {
    .dashlink {
      margin-left: 15px;
      font-size: 20px;
      color: #484848;
    }
  }

  .logo {
    width: 205.77px;

    @media (max-width: 750px) {
      width: fit-content;
    }
  }

  .event {
    font-size: 26px;
    line-height: 30px;
    color: #484848;
    font-weight: 600;
    margin: 0;

    @media (max-width: 750px) {
      display: none;
    }
  }

  .conta {
    position: relative;

    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
      position: relative;
      min-width: 200px;

      @media (max-width: 450px) {
        flex-direction: row-reverse;
      }

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 15px;

        @media (max-width: 450px) {
          margin-right: 0;
        }

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      p {
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        transition: all ease 0.5s;
        margin: 0;
        color: #484848;

        @media (max-width: 450px) {
          display: none;
        }
      }

      svg {
        width: 25px;
        height: auto;
        transition: all ease 0.5s;
        margin-right: 10px;
      }

      :hover {
        p {
          color: #f24a08;
        }

        svg {
          fill: #f24a08;
        }
      }
    }

    nav {
      position: absolute;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 2px 7px rgba(120, 137, 149, 0.25);
      padding: 20px;
      top: calc(100% + 10px);
      z-index: ${(props) => (props.openDrop ? '10' : '-1')};
      opacity: ${(props) => (props.openDrop ? '1' : '0')};
      transition: all ease 0.5s;

      @media (max-width: 450px) {
        width: 160px;
        right: -20px;
      }

      .disabled {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: transparent;
        z-index: ${(props) => (props.openDrop ? '-1' : '1')};
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        z-index: ${(props) => (props.openDrop ? '1' : '-1')};

        li {
          a {
            font-size: 16px;
            line-height: 19px;
            color: #484848;
            padding: 15px 0;
            display: flex;
            align-items: center;
            transition: all ease 0.5s;

            svg {
              margin-right: 10px;
            }

            :hover {
              color: #f24a08;
            }
          }
        }
      }
    }
  }
`;
