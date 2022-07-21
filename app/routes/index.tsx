import type { LoaderFunction, LinksFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import * as firstPost from "./blog/first-post.mdx"
import * as secondPost from "./blog/second-post.mdx"

import MainLayout from "~/components/MainLayout"
import PostList from "~/components/PostList";
import { links as postListItemLinks } from "~/components/PostListItem/PostListItem";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  }
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost), postFromModule(secondPost)]
}

export const links: LinksFunction = () => ([
  ...postListItemLinks(),
])

export default function Index() {
  const posts = useLoaderData()
  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  )
}
