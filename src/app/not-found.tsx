import { Button, Result } from 'antd'
import Link from 'next/link'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="404"
    title="Not Found"
    subTitle="Global 404 ➡️ Could not find requested resource."
    extra={
      <Button>
        <Link href="/">Back Home 🏠 </Link>
      </Button>
    }
  />
)

export default App
