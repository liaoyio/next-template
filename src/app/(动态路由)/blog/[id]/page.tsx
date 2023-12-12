import { notFound } from 'next/navigation'

async function fetchUser(id: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if (!res.ok) return undefined

  // 测试 error 页面
  if (Number(id) === 2) {
    throw new Error('测试 error 页面')
  }
  // 测试 404 页面
  if (Number(id) > 3) return undefined
  return res.json()
}
/**
 *
 * @param param {params: { id: string }} 从动态路由获取参数
 * @returns
 */
export default async function Profile({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id)

  if (!user) {
    // 手动触发并跳转到 404 页面
    notFound()
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
