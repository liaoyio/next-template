'use client'

import { useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="border-b border-dashed mb-4">
        <h1 className="font-600 text-xl">Template </h1>
        <div className="py-4">
          <p> count: {count} 🔫</p>
          <button onClick={() => setCount(count + 1)}> 🎮 + 1</button>
        </div>
      </div>
      {children}
    </>
  )
}
