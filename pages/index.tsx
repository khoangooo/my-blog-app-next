import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}
    >
      <h1>Nextjs</h1>
    </main>
  )
}
