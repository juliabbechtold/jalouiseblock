import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-Semibold.eot')});
      src: url(${require('../assets/fonts/Whitney-Semibold.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-Semibold.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-Semibold.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-Semibold.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-MediumItalic.eot')});
      src: url(${require('../assets/fonts/Whitney-MediumItalic.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-MediumItalic.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-MediumItalic.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-MediumItalic.ttf')}) format('truetype');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-LightItalic.eot')});
      src: url(${require('../assets/fonts/Whitney-LightItalic.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-LightItalic.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-LightItalic.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-LightItalic.ttf')}) format('truetype');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-Medium.eot')});
      src: url(${require('../assets/fonts/Whitney-Medium.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-Medium.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-Medium.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-Medium.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-BookItalic.eot')});
      src: url(${require('../assets/fonts/Whitney-BookItalic.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-BookItalic.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-BookItalic.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-BookItalic.ttf')}) format('truetype');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-Light.eot')});
      src: url(${require('../assets/fonts/Whitney-Light.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-Light.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-Light.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-Light.ttf')}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-SemiboldItalic.eot')});
      src: url(${require('../assets/fonts/Whitney-SemiboldItalic.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-SemiboldItalic.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-SemiboldItalic.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-SemiboldItalic.ttf')}) format('truetype');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-Book.eot')});
      src: url(${require('../assets/fonts/Whitney-Book.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-Book.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-Book.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-Book.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Whitney';
      src: url(${require('../assets/fonts/Whitney-Bold.eot')});
      src: url(${require('../assets/fonts/Whitney-Bold.eot?#iefix')}) format('embedded-opentype'),
          url(${require('../assets/fonts/Whitney-Bold.woff2')}) format('woff2'),
          url(${require('../assets/fonts/Whitney-Bold.woff')}) format('woff'),
          url(${require('../assets/fonts/Whitney-Bold.ttf')}) format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Whitney';
  }

  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: 'Whitney';
  }


  .ant-modal-body {
    h4 {
        font-size: 20px ;
        line-height: 20px;
        color: #484848;
        text-align: center;
      }

      
    button {
        width: 100%;
        height: 60px;
        background-color: transparent;
        border: none;
        font-size: 18px;
        line-height: 18px;
        cursor: pointer;
    }

        .excluir {
          color: #e74e16;
          border-bottom: 1px solid #aaaaaa;


          svg {
            height: 22px;
            width: 22px;
            position: relative;
            top: 4px;
          }

          :hover {
            color: #003a82;
          }
        }

        .cancelar {
          color: #aaaaaa;

          :hover {
            color: #003a82;
          }
        }

  }

  .validacao {
    > div {
      width: 100vw;
      height: 100vh;  
      display: flex;
      flex-direction: column;
      align-items: center; 
      justify-content: center;
    }

    .valido {
      svg {
        height: 60px;
        width: auto;
        > path {
          fill: green;
        }
      }
    }

    .invalido {
      svg {
        height: 60px;
        width: auto;
        > path {
          fill: red;
        }
      }
    }


    p {
      margin-top: 15px;
      font-size: 40px;
      line-height: 44px;
      color: #484848;
      font-weight: 600;
    }
  }
`;
