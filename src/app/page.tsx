import * as React from 'react'
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div flex="~ col" className="items-center">
        <h1 className="font-bold text-6xl font-mono">Next.js + UnoCSS ✨</h1>
        <h3 m="t-3" hover="text-[#0AC7B4]">
          @liaoyi
          <span
            className="group-hover:-translate-x-1 i-lucide:arrow-up-right"
            inline="block"
            transition="transform"
            motion-reduce="transform-none"
            m="l-1"
          />
        </h3>
      </div>
    </main>
  )
}
