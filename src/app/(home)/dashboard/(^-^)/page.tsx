import Link from 'next/link'

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Dashboard! 👋'
  }
}

export default async function DashboardPage() {
  const { message } = await getData()
  return (
    <div>
      <h1>{message}</h1>

      <div className="flex gap-3 py-6">
        <Link href="/dashboard/test-error">⭕️ Open error page ➡️</Link>
      </div>
    </div>
  )
}
