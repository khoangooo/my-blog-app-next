import { Tag } from "@/types/tag";

interface IProps {
  tag?: Tag;
}

function Item({ tag }: IProps) {

  return (
    <li><a href="#">Javascript</a></li>
  )
}

export default Item;
