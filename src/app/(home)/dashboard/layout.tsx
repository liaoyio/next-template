'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <div className="px-8 container mx-auto py-6 demo">
      <div className="border-b border-dashed mb-6 py-4">
        <p className="text-14px c-[#777] pb-4">
          现在点击两个 `🎮 + 1` 按钮，会开始计数。随便点击下数字，然后再点击 `About` 或者 `Settings`
          切换路由，你会发现，`Layout` 后的数字没有发生变化，`Template` 后的数字重置为
          0。这就是所谓的状态保持。
        </p>
        <h1 className="font-600 text-xl">Layout </h1>

        <div className="flex gap-3 py-6 link">
          <Link href="/dashboard/about" className="">
            🤡 About
          </Link>
          <Link href="/dashboard/settings"> ⚙️ Settings</Link>
        </div>
        <p> count: {count} 🔫</p>
        <button onClick={() => setCount(count + 1)}> 🎮 + 1</button>
      </div>
      {children}
    </div>
  )
}
