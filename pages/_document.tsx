import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
