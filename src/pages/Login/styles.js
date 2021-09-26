import styled from 'styled-components';

export const Acesso = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    height: fit-content;
    min-height: 100vh;
    background-color: #dfe6ed;
  }

  .formulario {
    width: 55%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    position: relative;
    background-color: #fff;

    @media (max-width: 750px) {
      width: 100%;
      height: fit-content;
      padding: 60px 20px 80px 20px;
    }

    .logo {
      width: 170px;
      height: auto;
      margin-bottom: 35px;

      @media (max-width: 520px) {
        width: 120px;
      }
    }

    h2 {
      color: #484848;
      font-size: 28px;
      line-height: 32px;
      font-weight: 500;
      margin-bottom: 25px;
    }

    .newopacity {
      opacity: 0.5;
    }

    .error {
      font-size: 16px;
      color: red;
      font-weight: bold;
      margin-top: 10px;
    }

    form {
      width: 55%;
      display: flex;
      flex-direction: column;
      position: relative;

      @media (max-width: 950px) {
        width: 100%;
      }

      .disabled {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }

      label {
        font-size: 15px;
        line-height: 20px;
        color: #d4d9dd;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 20px;
      }

      input {
        width: 100%;
        border: 2px solid #dde3e8;
        line-height: 24px;
        font-style: normal;
        color: #484848;
        text-align: left;
        font-size: 18px;
        padding: 8px 13px;
        border-radius: 5px;
        font-family: 'Whitney';
        height: 55px;

        ::-webkit-input-placeholder {
          font-size: 18px;
          line-height: 24px;
          font-style: normal;
          color: #dde3e8;
        }
      }

      button {
        line-height: 24px;
        font-style: 600;
        font-size: 20px;
        color: #fff;
        padding: 15px 30px;
        border: none;
        align-self: center;
        cursor: pointer;
        margin-top: 25px;
        border-radius: 5px;
        transition: all ease 0.5s;
        width: 100%;
        box-shadow: 0 2px 7px rgba(120, 137, 149, 0.25);
        background-color: #000;
        text-transform: uppercase;

        :hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }

  .img {
    width: 45%;
    height: 100vh;
    background-color: #dfe6ed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 750px) {
      width: 100%;
      height: 200px;
      min-height: calc(100vh - 534.27px);
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;

      @media (max-width: 750px) {
        object-position: center 40%;
      }
    }

    h2 {
      font-size: 60px;
      line-height: 64px;
      color: #fff;
      font-weight: bold;
      position: absolute;
      max-width: 310px;
      bottom: 14vh;
      left: 11vh;
      margin: 0;

      @media (max-width: 1080px) {
        left: unset;
      }

      @media (max-width: 750px) {
        bottom: unset;
        left: 30px;
        bottom: 30px;
        font-size: 45px;
        line-height: 49px;
      }
    }
  }
`;
