import { type AppProps } from "next/app";
import type { PageWithLayout } from "../../modules/Layout";
import { type Session } from "next-auth";
import "../styles/globals.css"

// Add generic type
type AppPropsWithLayout<P> = AppProps<P> & {
    Component: PageWithLayout<P>;
};

import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({
    Component,
    pageProps,
  }: AppPropsWithLayout<{ session: Session }>) => {
    const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;