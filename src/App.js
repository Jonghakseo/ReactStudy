import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle =createGlobalStyle`

  * {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

  ul {
    list-style: none;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: "Cabin", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #111111;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 16px;
  }
  
  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Route exact path="/" component={MainPage}/>
    </>
  );
}

export default App;
