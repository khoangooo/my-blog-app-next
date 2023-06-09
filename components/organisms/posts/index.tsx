import { Post } from "@/types/post";
import Item from "./item";

type Posts = Post[]

type Props = {
  posts?: Posts;
}

function Posts({ posts = [] }: Props) {
  const newPosts = Array.from({ length: 10 });
  
  return (
    <ul className='w-full lg:w-4/5 flex flex-col gap-3'>
      {newPosts.map((item, i) => <Item key={i} />)}
    </ul>
  )
}

export default Posts;