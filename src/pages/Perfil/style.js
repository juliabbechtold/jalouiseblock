import styled from 'styled-components';

export const Container = styled.div`
  padding: 110px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: rgb(120 137 149 / 15%);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: fit-content;
      position: relative;
    }

    .display {
      z-index: 1 !important;

      img {
        opacity: 1 !important;
      }
    }

    .anexo {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      margin: 0;
      border: none;
      cursor: pointer;
      background-color: rgb(244, 246, 250);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      svg {
        object-fit: cover;
        width: 50px;
        height: 50px;
        fill: #484848;
      }
    }

    #img-container {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      top: 0;
      z-index: -1;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        opacity: 0;
      }
    }

    .close {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      border: none;
      width: 25px;
      height: 25px;
      z-index: 2;
      cursor: pointer;

      svg {
        height: 25px;
        width: auto;
      }
    }

    .nome {
      font-size: 40px;
      line-height: 44px;
      color: #484848;
      margin-top: 15px;

      @media (max-width: 750px) {
        font-size: 30px;
        line-height: 34px;
      }
    }

    > div {
      width: 100%;
      max-width: 1130px;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
      }

      > div {
        width: 47%;

        @media (max-width: 750px) {
          width: 80%;
        }

        @media (max-width: 500px) {
          width: 100%;
        }

        label {
          font-size: 25px;
          line-height: 29px;
          color: #484848;
          font-weight: bold;
          margin-bottom: 10px;
          display: flex;

          @media (max-width: 750px) {
            font-size: 20px;
            line-height: 24px;
          }
        }

        p,
        input {
          font-size: 20px;
          line-height: 24px;
          color: #484848;
          font-weight: 500;
          padding: 10px 20px;
          border: 1px solid #484848;
          border-radius: 10px;
          margin-bottom: 20px;
          background-color: #fff;
          width: 100%;

          @media (max-width: 750px) {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .alterar {
          background-color: transparent;
          border: none;
          border-radius: unset;
          padding: 0;
          font-size: 16px;
          color: red;
        }
      }
    }
  }
`;
