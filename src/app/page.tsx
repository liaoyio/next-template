import { AntdesignIcon, NextjsIcon, UnocssIcon } from '@/components/icon/logo'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex">
      <div flex="~ " className="items-center gap-3 border-b border-dashed pb-3 w-full">
        <div flex="~" className="gap-3 ">
          <NextjsIcon className="w-5 h-5" />
          <UnocssIcon className="w-5 h-5" />
          <AntdesignIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-xl">Hello App ✨</span>
      </div>
    </main>
  )
}
