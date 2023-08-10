import "../styles/globals.css"
import CustomChakraProvider from "../components/providers/CustomChakraUi";
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
          {children}
        </CustomChakraProvider>
      </body>
    </html>
  )
}
