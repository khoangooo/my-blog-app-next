import { ReactNode } from 'react'
import { Footer, Header } from "@/components/molecules";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"] })

interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main
        className={`max-w-screen-xl m-auto min-h-screen px-6 lg:px-16 ${roboto.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;