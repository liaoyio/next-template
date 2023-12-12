'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation({ navLinks }: { navLinks: { name: string; href: string }[] }) {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link className={isActive ? 'text-blue' : 'text-black'} href={link.href} key={link.name}>
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
