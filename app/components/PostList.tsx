import type { Post } from "~/types/Post"
import PostListItem from "./PostListItem"

type Props = {
  posts: Array<Post>
}

function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map((post: Post) => {
        return <PostListItem key={post.slug} post={post} />
      })}
    </ul>
  )
}

export default PostList
