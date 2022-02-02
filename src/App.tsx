import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={ theme }>
      <Main />
    </ChakraProvider>
  );
}

export default App;
