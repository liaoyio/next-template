export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 container mx-auto py-6 demo">
      <div>
        <h1 className="py-4 border-b border-dashed text-14px font-500">动态路由 Layout 🌊</h1>
      </div>
      {children}
    </div>
  )
}
