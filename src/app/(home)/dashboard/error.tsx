'use client' // MARK: 错误组件必须是客户端组件

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="demo">
      <h2 className="text-14px font-600 c-red"> dashboard/error ➡️ Something went wrong!</h2>
      <button
        className="red"
        onClick={
          // 尝试恢复
          () => reset()
        }
      >
        Try again 🔄
      </button>
    </div>
  )
}
