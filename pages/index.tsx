import { Roboto } from 'next/font/google'
import BannerImage from '@/components/molecules/bannerImage'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}
    >
      <BannerImage src="/sample.jpeg"/>
    </main>
  )
}
