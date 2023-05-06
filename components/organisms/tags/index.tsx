import { Tag } from "@/types/tag";
import Item from "./item";

type Tags = Tag[]

type Props = {
  tags?: Tags;
}

function Posts({ tags = [] }: Props) {
  const newTags = Array.from({ length: 10 });

  return (
    <ul className="w-full lg:w-1/5 flex lg:flex-col lg:items-end gap-3 flex-wrap">
      {newTags.map((item, i) => <Item key={i} />)}
    </ul>
  )
}

export default Posts;