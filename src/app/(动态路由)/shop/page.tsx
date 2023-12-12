import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className="pt-4 text-14px font-500">动态路由: [...folderName]</h1>
      <br />
      <p className="text-14px c-[#777] ">
        在命名文件夹的时候，如果你在方括号内添加省略号，比如
        `[...folderName]`，这表示捕获所有后面所有的路由片段。
      </p>
      <p className="text-14px c-[#777]">
        也就是说, `app/shop/[...slug]/page.tsx`会匹配 `/shop/clothes`，也会匹配
        `/shop/clothes/tops`、`/shop/clothes/tops/t-shirts`等等。
      </p>

      <div className="blog py-4">
        <h1>Shop page 🛍️ </h1>
        <p className="text-14px c-[#777] py-2">
          👇 点击下面路由可以查看不同的参数，注意观察浏览器 url 变化
        </p>
        <div className="flex flex-col py-4 divide-dashed divide-y">
          <Link href="/shop/clothes">/shop/clothes</Link>
          <Link href="/shop/clothes/tops">/shop/clothes/tops</Link>
          <Link href="/shop/clothes/tops/t-shirts">/shop/clothes/tops/t-shirts</Link>
        </div>
      </div>
    </>
  )
}
