// DEPENDENCIES

// COMPONENTS
import Navigation from './components/Layout/Navigation';
import Homepage from './components/Homepage'
import Footer from './components/Layout/Footer';

// STYLES
import { createGlobalStyle, ThemeProvider } from "styled-components";

// THEME PROVIDER
const theme = {
	colors: {
		primary: {
			first: "#F15298",
			second: "#F12F6B",
			thrid: "#FF693B",
			fourth: "#F6F8FC",
		},
		background: {
			first: "#F6F8FC",
			second: "#E9E9E9",
			thrid: "#D5DCE1",
			fourth: "#F69F84",
		},
		text: {
			first: "#FFF",
			second: "#F3F3F3",
			thrid: "#D53100",
			fourth: "#707070",
		},
	},
	fonts: {
		primary: "'Noto Sans JP', sans-serif;",
	},
};
// GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    display:block;
    margin:0 auto;
    padding: 0;
  }
  body{
    min-height: 100vh;
    font-family: ${theme.fonts.primary};
  }
  a{
    color: ${theme.colors.text.thrid};
    text-decoration: none;
    :hover{
      color: ${theme.colors.text.fourth};
      text-decoration: none;
    }
  }
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Homepage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
