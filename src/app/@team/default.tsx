/*
  访问 /about时，报错，因为此时根layout中的 `team `、 `anaylytics`、`demo` 都为空
  为了解决这一问题，Next.js 添加了 default.js 文件，
  在 @team 、@anaylytics 、 @demo 下都添加一个 default.tsx
*/
export default function Page() {
  return <h1 className="font-semibold py-3 border-b border-dashed">🙋 Hello, Team Default!</h1>
}
