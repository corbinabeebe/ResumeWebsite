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

export function NavigationTabs() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div role= "tablist" className="tabs tabs-boxed">
        {navigationPaths.map(link => 
              <a 
                role="tab"
                className={`tab ${pathname === link.href ? "tab-active" : ""}`} 
                key={link.href}
                onClick={() => {
                  router.push(link.href)
                }}>
                  {link.name}
              </a>)}
      </div>
    </>
  )
}