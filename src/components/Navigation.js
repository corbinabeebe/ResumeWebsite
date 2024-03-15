'use client'

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image";

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

          </div>
        </div>
      </div>

    </>
  )
}