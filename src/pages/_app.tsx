import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* TODO: Skapa en header */}
      <Component {...pageProps} />
      {/* TODO: Add Footer with contact form */}
    </ChakraProvider>
  );
}
