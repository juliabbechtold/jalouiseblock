import styled from 'styled-components';

export const Container = styled.section`
  min-height: 93vh;
  width: 100%;
  padding-top: 88.66px;
  display: flex;

  @media (max-width: 520px) {
    min-height: 91vh;
  }

  nav {
    width: 210px;
    background-color: rgb(120 137 149 / 25%);
    padding: 10px 0px;

    @media (max-width: 900px) {
      display: none;
    }

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

  > div {
    padding: 30px 20px 80px 50px;
    width: calc(100% - 210px);
    max-width: 1130px;

    @media (max-width: 900px) {
      width: 100%;
      padding: 30px 20px 80px 20px;
    }

    .infos {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 520px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
      }

      .status-da-persiana {
        .title {
          font-size: 40px;
          line-height: 44px;
          color: #484848;
          font-weight: 600;
          margin-bottom: 0px;
          margin-right: 30px;

          @media (max-width: 680px) {
            font-size: 30px;
            line-height: 34px;
          }
        }

        > div {
          display: flex;
          align-items: center;
          margin-top: 30px;

          @media (max-width: 680px) {
            margin-top: 20px;
          }

          p {
            font-size: 20px;
            line-height: 24px;
            color: #484848;
            margin: 0px;
            margin-left: 20px;

            @media (max-width: 680px) {
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }

      #wrapper {
        @media (max-width: 520px) {
          margin-top: 50px;
        }
        h1 {
          font-size: 20px;
          line-height: 24px;
          color: #484848;
          margin: 0px;

          @media (max-width: 680px) {
            font-size: 16px;
            line-height: 20px;
          }
        }

        > div {
          display: flex;
          align-items: center;
          margin-top: 10px;

          svg {
            width: 40px;
            height: auto;
            margin-right: 10px;
          }

          h2 {
            font-size: 20px;
            line-height: 24px;
            color: #484848;
            font-weight: bold;
            margin: 0px;

            @media (max-width: 680px) {
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }
    }

    .atividades-recentes {
      margin-top: 50px;

      .ant-table-thead > tr > th {
        border-bottom: none;
        font-size: 20px;
        line-height: 24px;
        color: #484848;
        font-weight: bold;
        text-align: center;

        @media (max-width: 520px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .table-head {
        margin-bottom: 5px;
        border-bottom: none;
        padding: 0;
        p {
        }
      }
      .ant-table-tbody > tr > td {
        border-bottom: 1px solid #efeff0;

        font-size: 16px;
        line-height: 20px;
        color: #484848;
        margin: 0;
        text-align: center;

        @media (max-width: 520px) {
          font-size: 14px;
          line-height: 18px;
        }

        input {
          background-color: transparent;
          border: none;
          font-size: 16px;
          line-height: 20px;
          color: #484848;
          font-weight: 600;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;

          svg {
            height: 25px;
            width: auto;
            transition: all ease 0.5s;
          }

          :hover {
            svg {
              fill: blue;
            }
          }
        }

        .delete {
          svg {
            fill: red;
          }
        }
      }
      .ant-table-tbody > tr:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  }
`;
