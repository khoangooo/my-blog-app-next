import { Post } from "@/types/post";
import Link from "next/link";

interface IProps {
  post?: Post;
}

function Item({ post }: IProps) {

  return (
    <li className='flex gap-3'>
      <div className='w-1/10'>01-01-2023</div>
      <div className='flex-1'>
        <Link href="/posts/1" className="text-blue-600">Lorem ipsum dor samet lorem dor ipsum samet</Link>
      </div>
    </li>
  )
}

export default Item;
