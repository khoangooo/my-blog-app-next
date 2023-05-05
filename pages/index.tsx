import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}
    >
      <div className='w-full flex gap-5'>
        <ul className="w-1/5 flex flex-col items-end gap-3">
          <li><a href="#">Javascript</a></li>
          <li><a href="#">C#</a></li>
          <li><a href="#">Ruby</a></li>
          <li><a href="#">React</a></li>
        </ul>
        <ul className='w-4/5 flex flex-col gap-3'>
          <li className='flex gap-3'>
            <div className='w-1/10'>01-01-2023</div>
            <div className='flex-1'>Lorem ipsum dor samet lorem dor ipsum samet</div>
          </li>
          <li className='flex gap-3'>
            <div className='w-1/10'>01-01-2023</div>
            <div className='flex-1'>Lorem ipsum dor samet lorem dor ipsum samet</div>
          </li>
          <li className='flex gap-3'>
            <div className='w-1/10'>01-01-2023</div>
            <div className='flex-1'>Lorem ipsum dor samet lorem dor ipsum samet</div>
          </li>
        </ul>
      </div>
    </main>
  )
}
