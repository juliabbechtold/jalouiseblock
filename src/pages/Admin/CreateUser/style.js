import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  min-height: calc(100vh - 63px);
  display: flex;

  .content {
    width: calc(100% - 210px);
    max-width: 1130px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px 80px 50px;

    @media (max-width: 900px) {
      width: 100%;
      padding: 30px 20px 80px 20px;
    }

    h4 {
      font-size: 40px;
      line-height: 44px;
      color: #484848;
      font-weight: 600;
      margin-bottom: 20px;

      @media (max-width: 900px) {
        font-size: 30px;
        line-height: 34px;
      }
    }

    > form {
      width: 47%;
      display: flex;
      flex-direction: column;

      @media (max-width: 750px) {
        width: 80%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }

      .erro {
        font-size: 14px;
        color: red;
        position: absolute;
        bottom: -20px;
      }

      label {
        font-size: 26px;
        line-height: 30px;
        color: #484848;
        font-weight: 500;
        margin-bottom: 10px;
        padding: 0 25px;

        @media (max-width: 900px) {
          font-size: 20px;
        }
      }

      .border {
        border: 1px solid red;
      }

      > div {
        margin-bottom: 30px;
        position: relative;
        width: fit-content;
        display: flex;
        flex-direction: column;

        @media (max-width: 525px) {
          width: 100%;
        }
      }

      input {
        width: 485px;
        height: 60px;
        background-color: rgb(244, 246, 250);
        font-weight: 900;
        font-size: 18px;
        color: #484848;
        line-height: 17px;
        border-radius: 12px;
        border: none;
        padding-left: 30px;
        position: relative;

        @media (max-width: 900px) {
          font-size: 14px;
        }

        @media (max-width: 525px) {
          width: 100%;
        }
      }

      .cpfvalido {
        color: green;
        font-size: 16px;
        margin-top: 5px;
        display: flex;
        align-items: center;
      }

      .btns {
        position: relative;
        margin-top: 20px;

        button {
          line-height: 24px;
          font-style: normal;
          font-size: 18px;
          color: #fff;
          background-color: #2c88d9;
          padding: 10px 20px;
          border: none;
          width: fit-content;
          align-self: center;
          cursor: pointer;
          border-radius: 5px;
          transition: all ease 0.5s;
          box-shadow: 0 2px 7px rgba(120, 137, 149, 0.25);
          background-image: linear-gradient(to right, #f24a08, #fa8113);
          text-transform: uppercase;

          :hover {
            background-image: linear-gradient(
              to right,
              #f24a08,
              #fa8113,
              #f24a08
            );
          }
        }
      }
    }
  }
`;
