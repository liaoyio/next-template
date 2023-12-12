import { Result } from 'antd'
import Link from 'next/link'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="404"
    title="Not Found"
    subTitle="Blog 404 ➡️"
    extra={
      <button>
        <Link href="/blog">Back Page 🔙</Link>
      </button>
    }
  />
)

export default App
