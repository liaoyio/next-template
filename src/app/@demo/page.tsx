import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
      <div className="py-10 demo">
        <h1 className="py-3">@demo 🧐</h1>
        <div className="link flex flex-col gap-3 text-14px">
          <Link href="/dashboard" className="border-b border-[#bedcff] hover:c-[#007fff]">
            Layout 和 Template 的区别
          </Link>
          <Link href="/dashboard/blog">全局 NotFound</Link>
          <Link href="/blog">动态路由 [folderName] </Link>
          <Link href="/shop">动态路由 [...folderName]</Link>
          <Link href="/tea">动态路由 [[...folderName]]</Link>
        </div>
      </div>
    </>
  )
}

export default Page
