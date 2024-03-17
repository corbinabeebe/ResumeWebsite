'use client'

import { usePathname, useRouter } from "next/navigation"
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";


const navigationPaths = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/resume",
    name: "Resume",
  },
  {
    href: "/blogs",
    name: "Blogs",
  },
  {
    href: "/portfolios",
    name: "Portfolios",
  }
]

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="container">
        <div className="navbar bg-gray-500 rounded-3xl">
          <div className="navbar-start">
          <div className="flex-1">
              {navigationPaths.map(link => 
                <a 
                  className={`btn text-xl m-2 p-2 ${pathname === link.href ? "btn-active btn-accent" : "btn-ghost"}`} 
                  key={link.href}
                  onClick={() => {
                  router.push(link.href)
                }}>
                {link.name}
                </a>)}
            </div>
          </div>
          <div className="navbar-center">

          </div>
          <div className="navbar-end">
            <div className="flex flex-row">
              <div className="mr-2">
                <Link href="https://www.linkedin.com">
                  <FaLinkedin size={50}/>                
                </Link>
              </div>
              <div className="ml-2">
                <Link href="https://www.github.com">
                <FaSquareGithub size={50}/>
                </Link>
              </div>
              <div>
                {/* <FaFileDownload /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}