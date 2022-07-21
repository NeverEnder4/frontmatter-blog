import type { LinksFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import styles from "highlight.js/styles/github-dark.css"

import PostLayout from "~/components/PostLayout"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ]
}

export default function Index() {
  return (
    <PostLayout>
      <Outlet />
    </PostLayout>
  )
}
