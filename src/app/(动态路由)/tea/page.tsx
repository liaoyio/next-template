import Link from 'next/link'

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h1 className="py-4 border-b border-dashed text-14px font-500">动态路由: [...folderName]</h1>
      <br />
      <p className="text-14px c-[#777] ">
        在命名文件夹的时候，如果你在双方括号内添加省略号，比如
        `[[...folderName]]`，这表示可选的捕获所有后面所有的路由片段。
      </p>
      <p className="text-14px c-[#777]">
        也就是说，`app/tea/[[...slug]]/page.tsx`会匹配 `/tea`，也会匹配 `/tea/clothes`、
        `/shop/clothes/tops`、`/tea/clothes/tops/black-tea `等等。
      </p>

      <p className="text-14px c-[#777]">
        它与`[...folderName]`区别就在于，不带参数的路由也会被匹配（就比如 /tea）.
      </p>
      <p className="text-14px py-2 c-red">
        注意⚠️：虽然可以匹配 /tea，但是/tae/page.tsx 必须存在，否则会进入 404 页面。
      </p>

      <div className="blog py-4">
        <h1>Shop page 🛍️ </h1>
        <p className="text-14px c-[#777] py-2">
          👇 点击下面路由可以查看不同的参数，注意观察浏览器 url 变化
        </p>
        <div className="flex flex-col py-4 divide-dashed divide-y">
          <Link href="/tea/">/tea</Link>
          <Link href="/tea/clothes">/shop/clothes</Link>
          <Link href="/tea/clothes/tops">/shop/clothes/tops</Link>
          <Link href="/tea/clothes/tops/t-shirts">/shop/clothes/tops/t-shirts</Link>
        </div>
        <div p="y-4">
          <div>My Tea: {JSON.stringify(params)}</div>
        </div>
      </div>
    </>
  )
}
