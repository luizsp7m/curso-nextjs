import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CustomersProvider } from "../contexts/CustomersContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomersProvider>
      <Component {...pageProps} />
    </CustomersProvider>
  );
}

export default MyApp;
