'use client'
import { Button, Result } from 'antd'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="main">
      <Result
        status="error"
        title="Blog error.tsx"
        subTitle="Something went wrong!"
        extra={[
          <Button type="primary" bg="#10b981" key="blog">
            <Link href="/blog">Back Page 🔙</Link>
          </Button>,
          <Button
            key="reset"
            onClick={() => {
              reset()
            }}
          >
            Try again 🔄
          </Button>
        ]}
      />
    </div>
  )
}
