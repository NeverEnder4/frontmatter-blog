import { Link } from "@remix-run/react"

import Github from "./Icons/Github"
import logo from "~/assets/images/logo.png"
import profileImage from "~/assets/images/profile-image.png"

export default function Header() {
  return (
    <header className="border-b border-gray w-full header">
      <div className="content py-8 mx-auto">
        <div className="upper-content">
          <Link className="logo-link" to="/">
            <img className="mr-2" src={logo} alt="logo" />
            <h1>Frontmatter</h1>
          </Link>
          <p className="leading-relaxed text-xl">
            Web Developer with a focus on front end <br />
            sharing what I learn along the way
          </p>
        </div>
        <ul className="flex items-end">
          <li>
            <a
              className="external-link"
              href="https://www.tonypettigrew.dev"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="profile-image"
                src={profileImage}
                alt="Tony Pettigrew"
              />
            </a>
          </li>
          <li className="ml-6">
            <a
              className="external-link"
              href="https://github.com/NeverEnder4"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
