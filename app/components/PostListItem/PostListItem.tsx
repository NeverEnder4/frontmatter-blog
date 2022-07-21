import { Link } from "@remix-run/react"

import type { Post } from "~/types/Post"
import { formatPostDate } from "~/utils/date"
import styles from "./styles.css"

export const links = () => [{ rel: "stylesheet", href: styles }]

type Props = {
  post: Post
}

function PostListItem({ post }: Props) {
  const url: string = `/blog/${post.slug}`

  return (
    <li className="post-list-item" key={post.slug}>
      <Link prefetch="intent" to={url}>
        <time className="meta-date" dateTime={post.date}>
          {formatPostDate(post.date)}
        </time>
        <h1 className="meta-title">{post.title}</h1>
        <p className="m-0 meta-description">{post.description}</p>
      </Link>
    </li>
  )
}

export default PostListItem
