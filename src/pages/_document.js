import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.io'/>
      </Head>
      <body className='bg-gray-900'>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
