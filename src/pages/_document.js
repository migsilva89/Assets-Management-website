import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
  const isPrivate = true // definir a condição aqui
  console.log(isPrivate)
  return (
    <Html lang='en'>
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
