import { Post } from "@/types/post";

interface IProps {
  post?: Post;
}

function BlogPost({post}: IProps) {
  return (
    <div className="my-10 sm:my-6">
      <h1 className="text-2xl font-bold sm:text-3xl text-center">
        Welcome Back, Barry!
      </h1>
      <div className="text-center">01-01-2023</div>
      <p className="mt-1.5 text-sm">
        Let's write a new blog post! 🎉
      </p>
    </div>
  )
}

export default BlogPost;
