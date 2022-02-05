/* @chakra-ui */
import { ChakraProvider  } from '@chakra-ui/react';
/* react-router-dom */
import { BrowserRouter } from 'react-router-dom';
/* theme */
import theme from './theme/theme'
/* router */
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
