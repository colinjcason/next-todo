import Link from "next/link"

const links = [
  {href:"/", text: "home"},
  {href:"/", text: "home"},
  {href:"/", text: "home"},
  {href:"/", text: "home"},
]

const NavBar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href='/' className="btn btn-primary">Home</Link>
        <ul className="menu md:ml-8 flex-col sm:flex-row">
          {
            links.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">{link.text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar