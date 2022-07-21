import Header from "./Header"
import Footer from "./Footer"
import PostBio from "./PostBio"

type Props = {
  children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <article className="content-container post prose prose-sm md:prose-base">
          {children}
        </article>
      </main>
      <PostBio />
      <Footer />
    </div>
  )
}
