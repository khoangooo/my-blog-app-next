import { Tags } from '@/components/organisms';
import Posts from '@/components/organisms/posts';

export default function Home() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-5 my-10'>
      <Tags />
      <Posts />
    </div>
  )
}
