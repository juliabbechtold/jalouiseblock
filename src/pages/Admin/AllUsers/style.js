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

    .title {
      display: flex;
      align-items: center;

      h4 {
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

      a {
        font-size: 16px;
        line-height: 20px;
        color: #484848;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        transition: all ease 0.5s;
        border: 1px solid #484848;

        svg {
          margin-right: 10px;
        }

        :hover {
          background-color: #484848;
          color: #fff;
        }
      }
    }

    p {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    ant-table-thead > tr > th {
      background-color: #fff;
      border-bottom: none;
      font-size: 20px;
      line-height: 24px;
      color: #484848;
      font-weight: bold;
      text-align: center;
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
      font-weight: 600;
      margin: 0;
      text-align: start;

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

    tr {
      border-top: 1px solid #efeff0;
    }

    td {
      padding: 16px;
      font-size: 16px;
      line-height: 20px;
      color: #484848;
      font-weight: 600;
      margin: 0;
      text-align: start;
    }

    td:first-child {
      width: 19.2%;
    }

    td:nth-child(2) {
      width: 32.3%;
    }

    td:nth-child(3) {
      width: 28.9%;

      input {
        background-color: transparent;
        border: none;
        font-size: 16px;
        line-height: 20px;
        color: #484848;
        font-weight: 600;
      }
    }

    td {
      button {
        background-color: transparent;
        border: none;

        svg {
          height: 25px;
          width: auto;
          transition: all ease 0.5s;
          cursor: pointer;
        }

        :hover {
          svg {
            fill: blue;
          }
        }
      }
    }
  }
`;
