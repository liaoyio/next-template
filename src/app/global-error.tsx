'use client'

/* Next.js 提供了 global-error 文件，用于捕获根布局中的错误
  global-error 会包裹整个应用，而且当它触发的时候，它会替换掉根布局的内容。
  所以,  `global-error` 中也要定义 <html> 和 <body> 标签。
*/

import { Button } from 'antd'
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <h2 className="text-14px font-500"> global-error ➡️ Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again 🔄</Button>
      </body>
    </html>
  )
}
