import Link from 'next/link'

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1 className="pt-4 text-14px font-500">动态路由: [...folderName]</h1>
      <div p="y-4">
        <div>My Tea: {JSON.stringify(params)}</div>
      </div>
    </div>
  )
}
