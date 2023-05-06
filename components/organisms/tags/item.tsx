import { Tag } from "@/types/tag";

type Props = {
  tag?: Tag;
}

function Item({ tag }: Props) {

  return (
    <li><a href="#">Javascript</a></li>
  )
}

export default Item;
