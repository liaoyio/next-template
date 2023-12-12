export default function Page() {
  return (
    <>
      <h1 className="pt-4 text-14px font-500">动态路由: [folderName]</h1>
      <div className="blog py-4">
        <h1>Blog List 📚</h1>
        <div className="flex flex-col py-4 divide-dashed divide-y">
          <a href="/blog/1">Blog 1 🔖</a>
          <a href="/blog/2">测试 Blog error 页面 ❌</a>
          <a href="/blog/3">Blog 3 🔖</a>
          <a href="/blog/4">测试 Blog 404 页面 ➡️</a>
          <a href="/blog/5">Blog 5 🙅</a>
          <a href="/blog/6">Blog 6 🙅</a>
        </div>
      </div>
    </>
  )
}
