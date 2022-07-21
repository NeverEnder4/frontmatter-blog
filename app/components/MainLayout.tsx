import Header from './Header';
import Footer from './Footer';


type Props = {
  children: JSX.Element[] | JSX.Element
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <div className="content-container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
