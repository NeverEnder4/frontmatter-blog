function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="description">
          {`Tony Pettigrew - Built with `}
          <a href="https://remix.run" target="_blank" rel="noreferrer">
            Remix
          </a>
          {` & Deployed with `}
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            Vercel
          </a>
        </span>
        <br />
        <span className="copyright">
          Copyright &#169; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
