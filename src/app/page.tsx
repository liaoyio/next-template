import { AntdesignIcon, NextjsIcon, UnocssIcon } from '@/components/icon/logo'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col border-b border-dashed">
      <div flex="~ " className="items-center gap-3  w-full">
        <div flex="~" className="gap-3 ">
          <NextjsIcon className="w-5 h-5" />
          <UnocssIcon className="w-5 h-5" />
          <AntdesignIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-xl">Hello App ✨</span>
      </div>
      <div className="pb-10 pt-4 demo">
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
    </main>
  )
}
