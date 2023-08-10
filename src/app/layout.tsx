import "../styles/globals.css"
import CustomChakraProvider from "../components/providers/CustomChakraUi";
import AppProvider from "../components/providers/contextProvider";
import Head from "./head";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <body>
        <CustomChakraProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </CustomChakraProvider>
      </body>
    </html>
  )
}
