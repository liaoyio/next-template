import Link from 'next/link'

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="px-8 container mx-auto py-6 demo">
      <div className="py-2">My Shop: {JSON.stringify(params)}</div>
    </div>
  )
}
