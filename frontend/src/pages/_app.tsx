import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { TransactionContextProvider } from '../states/contexts/transaction-context';
import '../styles/styles.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TransactionContextProvider>
        <Component {...pageProps} />
      </TransactionContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
