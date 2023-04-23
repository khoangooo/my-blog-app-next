import { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { Footer, Header } from "@/components/molecules";
import '@/styles/globals.scss'

interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
